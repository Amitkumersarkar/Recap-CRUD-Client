import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './Component/Home';
import Root from './Layout/Root';
import Users from './Component/Users';
import Update from './Component/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('http://localhost:1500/users')
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:1500/users/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
