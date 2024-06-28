import React from 'react'

function UserDetailsBox() {
  return (
    <div className='w-full h-full'>
        <div className="avatarWrapper w-full gap-4 h-[45%] flex items-center justify-start px-10">
        <div className="Avatar w-[140px] h-[140px] rounded-xl bg-zinc-300">
        </div>
        <div className="text w-[140px] h-[140px] flex flex-col gap-3 px-6">
            <h1>Owner</h1>
            <h1>Username</h1>
            <h1>Loginkey</h1>
            <h1>Role</h1>
        </div>
        </div>
        <div className="UserEntries w-full gap-4 h-[55%] flex items-start justify-start px-10">
        <div className="text w-full h-[140px] flex flex-col gap-3 px-6">
            <h1>Total entries: 110 </h1>
        </div>

        </div>
    </div>
  )
}

export default UserDetailsBox