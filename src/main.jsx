import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
// import ErrorPage from '../pages/ErrorPage';
import Resume from './components/UI/PortfolioSections/Resume';
import About from './components/UI/PortfolioSections/AboutMe';
import Portfolio from './components/UI/PortfolioSections/Portfolio';
import Contact from './components/UI/PortfolioSections/Contact';
import PortfolioContainer from './components/PortfolioContainer';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/',
        element: <Portfolio />,
      },
      {
        path: '/',
        element: <Contact />,
      },
      {
        path: '/',
        element: <Resume />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  );
