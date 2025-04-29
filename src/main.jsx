import { createRoot } from 'react-dom/client'
import './index.css'



import { createBrowserRouter, RouterProvider } from "react-router";
import Rootlayout from './layout/Rootlayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/contact',
        Component: Contact
      }

    ]

  },
]);

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />
)
