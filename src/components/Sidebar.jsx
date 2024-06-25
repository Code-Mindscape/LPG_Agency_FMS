import React from "react";
import { GoHomeFill } from "react-icons/go";
import { MdInventory } from "react-icons/md";
import { FaClipboard } from "react-icons/fa6";
import { AiFillShop } from "react-icons/ai";
import { MdPayments } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { MdReportProblem } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  const navLinks = [
    {
      id: 1,
      path: "/",
      icon: GoHomeFill,
    },
    {
      id: 2,
      path: "/users",
      icon: FaUsers,
    },
    {
      id: 3,
      path: "/inventory",
      icon: MdInventory,
    },
    {
      id: 4,
      path: "/invoices",
      icon: LiaFileInvoiceSolid,
    },
    {
      id: 5,
      path: "/venders",
      icon: AiFillShop,
    },
    {
      id: 6,
      path: "/orders",
      icon: FaClipboard,
    },
    {
      id: 7,
      path: "/payments",
      icon: MdPayments,
    },
    {
      id: 8,
      path: "/reports",
      icon: MdReportProblem,
    },
  ];
  return (
    <div className="sideBar w-[75px] h-full border border-r-1 border-zinc-400/50">
      <div className="logoBox flex items-center justify-center h-[10%]">
        <a href="" className="font-bold text-xl text-zinc-500">
          Logo
        </a>
      </div>
      <div className="tabsBox flex items-center justify-center flex-col h-[90%]">
        <ul className="flex items-center justify-center flex-col gap-3">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className={({
                  isActive,
                }) => `transition-all w-[50px] h-[50px] rounded-lg flex 
        items-center justify-center border ${
          isActive ? "bg-zinc-400/50 border-none" : ""
        } border-zinc-500/30
        hover:border-none hover:bg-zinc-400/40`}
              >
                {({ isActive }) => (
                  <link.icon
                    className={`text-xl ${
                      isActive ? "text-zinc-800" : "text-zinc-500"
                    }`}
                  />
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
