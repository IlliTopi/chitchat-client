import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LoginPage from './LogIn/Login.jsx'



const Router = () => {
    
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default Router