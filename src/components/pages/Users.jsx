import React from 'react'
import Navbar from '../Navbar/Navbar'
import ActionsHeader from '../ActionsHeader/ActionsHeader'

export default function Users() {
  return (

    <>
    <div className="users w-full h-screen flex-col flex items-center justify-center">
    <Navbar />
    <div className="mainContent flex-grow w-full bg-zinc-300">
      <ActionsHeader tabName={"All users"}/>
      <div className="main w-full flex-grow flex items-center justify-center">
        main
      </div>
    </div>
    </div>
    </>
  )
}
