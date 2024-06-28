import React from "react";
import Navbar from "../Navbar/Navbar";
import ActionsHeader from "../ActionsHeader/ActionsHeader";
import { Outlet } from "react-router-dom";
import SubNav from "../Navbar/SubNav";

export default function InventoryLayout() {
  return (
    <div className="users w-full h-screen flex flex-col">
      <Navbar />
      <SubNav/>
      <div className="mainContent flex-grow w-full bg-zinc-300 flex flex-col">
              <Outlet/>
        </div>
    </div>
  );
}
