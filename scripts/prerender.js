import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFileSync } from 'fs';
import { extname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  '/',
  '/about',
  '/projects',
  '/contact',
  '/terms',
  '/privacy',
  '/accessibility',
  '/cookies',
];

const distDir = path.join(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');
const PORT = 3000;

// Simple HTTP server to serve dist files
function createHTTPServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = path.join(distDir, req.url === '/' ? 'index.html' : req.url);
      
      // If file doesn't exist, serve index.html (for SPA routing)
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = indexPath;
      }
      
      const ext = extname(filePath);
      const contentType = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
      }[ext] || 'text/plain';
      
      try {
        const content = readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      } catch (error) {
        res.writeHead(404);
        res.end('Not found');
      }
    });
    
    server.listen(PORT, () => {
      console.log(`HTTP server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('Starting prerender...');
  
  const server = await createHTTPServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const route of routes) {
      console.log(`Prerendering ${route}...`);
      
      const page = await browser.newPage();
      await page.goto(`http://localhost:${PORT}${route}`, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      // Wait for React to render - check for actual content
      await page.waitForFunction(() => {
        const root = document.querySelector('#root');
        if (!root) return false;
        
        // Check if there's actual rendered content (not just empty divs)
        const hasContent = root.innerHTML && 
                          root.innerHTML.length > 100 && 
                          !root.innerHTML.includes('Loading...');
        
        return document.readyState === 'complete' && hasContent;
      }, { timeout: 30000 });
      
      // Additional wait for any async content and animations
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const html = await page.content();
      
      // Save prerendered HTML
      const outputPath = route === '/' 
        ? indexPath 
        : path.join(distDir, route, 'index.html');
      
      // Create directory if needed
      if (route !== '/') {
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      }
      
      fs.writeFileSync(outputPath, html);
      console.log(`✓ Prerendered ${route}`);
    }
  } finally {
    await browser.close();
    server.close();
  }
  
  console.log('Prerender complete!');
}

prerender().catch(console.error);

