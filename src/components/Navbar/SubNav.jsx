import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import { NavLink } from 'react-router-dom'

function SubNav() {

  return (
    <div className='w-full py-3 bg-white border border-l-0 border-t-1 border-b-0 border-zinc-400/50'>
    <div className="tabs w-full h-full flex items-center justify-start">
      <div className="btns flex gap-3 px-10">
        <NavLink to="/inventory/stock" className={({ isActive }) => isActive ? buttonVariants({}) : buttonVariants({ variant: "ghost" })}>
          Stock
        </NavLink>
        <NavLink to="/inventory/return" className={({ isActive }) => isActive ? buttonVariants({}) : buttonVariants({ variant: "ghost" })}>
          Stock Return
        </NavLink>
        <NavLink to="/inventory/movements" className={({ isActive }) => isActive ? buttonVariants({}) : buttonVariants({ variant: "ghost" })}>
          Inventory Movements
        </NavLink>
      </div>
    </div>  
  </div>
  )
}

export default SubNav