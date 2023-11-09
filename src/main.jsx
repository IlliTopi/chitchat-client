import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Router from './Router.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <App />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router />
)
