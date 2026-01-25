# Benzion Renovations Showcase

A modern showcase website for Benzion Renovations, featuring services, gallery, testimonials, and contact functionality.

## Technologies

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Framer Motion & GSAP (animations)
- React Hook Form + Zod (forms)
- EmailJS (contact form)
- Leaflet (maps)

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd benzion-renovations-showcase

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build with prerendering |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Deployment

The project includes Docker support for easy deployment:

```sh
docker build -t benzion-renovations .
docker run -p 80:80 benzion-renovations
```
