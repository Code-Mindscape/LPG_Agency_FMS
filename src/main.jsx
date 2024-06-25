import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import  Inventory  from './components/pages/Inventory';
import  Home  from './components/pages/Home';
import  Users  from './components/pages/Users';
import  Invoices  from './components/pages/Invoices';
import  Orders  from './components/pages/Orders';
import  Venders  from './components/pages/Venders';
import  Payments  from './components/pages/Payments';
import  Reports from './components/pages/Reports';
import Layout from './components/Layout.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="inventory" element={<Inventory />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="orders" element={<Orders />} />
      <Route path="venders" element={<Venders />} />
      <Route path="payments" element={<Payments />} />
      <Route path="reports" element={<Reports />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
