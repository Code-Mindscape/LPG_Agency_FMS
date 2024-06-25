import { useState } from "react";
import { BrowserRouter, Outlet } from 'react-router-dom';

import "./App.css";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";

function App() {

  return (
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  );
}

export default App;
