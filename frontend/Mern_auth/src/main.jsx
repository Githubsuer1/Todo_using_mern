import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './components/about.jsx';
import Contact from './components/contact.jsx'
import Home from './components/home.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


// array containing routes of different components
const router = createBrowserRouter(
  [{ 
    path: '/', 
    element: <App />, 
    children: [ 
      {
        path:'/',
        element:<Home />
      },
      { 
        path: '/about', 
        element: <About />, 
      }, 
      {
        path:'/home',
        element:<Home />
      },
      { 
        path: '/contact', 
        element: <Contact />, 
      }, 
    ], 
  }]
)

createRoot(document.getElementById('root')).render( 
  <RouterProvider router={router}> 
      <App /> 
  </RouterProvider> 
);
