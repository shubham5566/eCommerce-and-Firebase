import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {  AllProduct, Dashboard, Home, NoPage, Order, ProductInfo } from './componants/pages/index.js'
import Cart from './componants/pages/cart/Cart.jsx'
import MyState from './context/data/MyState.jsx'
import Login from './componants/registretion/Login.jsx'
import SignUp from './componants/registretion/SignUp.jsx'
import AddProduct from './componants/pages/admin/pages/AddProduct.jsx'
import UpdateProduct from './componants/pages/admin/pages/UpdateProduct.jsx'
import { Provider } from 'react-redux'
import { store } from './store/Store.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      path: '/dashboard',
      element: <Dashboard/>,
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
    {
      path: '/login',
      element: <Login/>,
    },
    {
      path: '/signup',
      element: <SignUp/>,
    },
    {
      path: '/productInfo/:id',
      element: <ProductInfo/>,
    },
    {
      path: '/addProduct',
      element: <AddProduct/>,
    },
    {
      path: '/updateProduct',
      element: <UpdateProduct/>,
    },
    
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyState>
      <Provider store={store} >

        <RouterProvider router={router} />
        <ToastContainer/>
      </Provider>

    </MyState>

  </React.StrictMode>,
)
