import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Admin, AllProduct, Home, NoPage, Order } from './componants/pages/index.js'
import Cart from './componants/pages/cart/Cart.jsx'
import MyState from './context/data/MyState.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      
      {
        path: "/",
        element: <Home/>
      },
      
    ],
  
    },

    {
      path: '/order',
      element: <Order/>,
    },
    {
      path: '/admin',
      element: <Admin/>,
    },
    {
      path: '/cart',
      element: <Cart/>,
    },
    {
      path: '/allproducts',
      element: <AllProduct/>,
    },
    {
      path: '*',
      element: <NoPage/>,
    },
    
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyState>

        <RouterProvider router={router} />
    </MyState>

  </React.StrictMode>,
)
