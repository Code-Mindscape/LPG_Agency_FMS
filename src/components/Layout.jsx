import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="main h-screen w-full flex items-center justify-center">
        <Sidebar/>
        <div className="side- h-full flex-1 flex items-center justify-center bg-zinc-200">
          <Outlet/>
        </div>
    </div>
  )
}

export default Layout