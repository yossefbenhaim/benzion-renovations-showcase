import type { RouteObject } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import AccessibilityStatement from './pages/AccessibilityStatement';
import Cookies from './pages/Cookies';
import NotFound from './pages/NotFound';

// Define all routes for SSG prerendering
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/terms',
    element: <Terms />,
  },
  {
    path: '/privacy',
    element: <Privacy />,
  },
  {
    path: '/accessibility',
    element: <AccessibilityStatement />,
  },
  {
    path: '/cookies',
    element: <Cookies />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

