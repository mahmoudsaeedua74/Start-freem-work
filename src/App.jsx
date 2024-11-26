import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './componets/layout/Layout';
import Contact from './componets/contact/Contact';
import Portfolio from './componets/portfolio/Portfolio';
import About from './componets/About/About';
import FourPage from './componets/FourPage/FourPage';
import Foooter from './componets/Footer/Foooter';
import Home from './componets/Home/Home';

function App ( ) {

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "Contact", element: <Contact /> },
        { path: "Portfolio", element: <Portfolio />  },
        { path: "About", element: <About /> },
        {path: "*", element: <FourPage/>}]
    },
  ]);

  return <RouterProvider router={router} />; 
}

export default App