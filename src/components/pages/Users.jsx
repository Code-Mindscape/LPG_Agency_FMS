import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Users() {
  return (

    <>
    <div className="users w-full h-screen flex-col flex items-center justify-center">
    <Navbar />
    <div className="mainContent flex-grow w-full bg-zinc-300">
      <h1>Users</h1>
    </div>
    </div>
    </>
  )
}
