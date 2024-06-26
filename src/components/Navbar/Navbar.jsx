import React from 'react'

export default function Navbar() {
  return (
    <nav className='navBar w-full h-14 bg-white border border-l-0 border-b-[0] border-zinc-400/50'>
      <div className="nav_content w-full flex items-center justify-end h-full">
        <div className="UserDetailsBtns px-8 h-full gap-3 flex items-center justify-center">
          <h2 className='text-lg text-zinc-700 '>username</h2>
          <div className="avatar w-[40px] h-[40px] bg-zinc-400 rounded-full flex items-center justify-center">
            MU
          </div>
        </div>
      </div>
    </nav>
  )
}
