import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Phones from './iPhones/Phones.jsx'
import MacData from './components/Macbook/Mackbook.jsx'
import Accesories from './components/Accesories/Accesories.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/phones",
    element: <Phones />,
  },
  {
    path: "/mac",
    element: <MacData />,
  },
  {
    path: "/accessories",
    element: <Accesories />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <RouterProvider router={router} />
  </StrictMode>
);