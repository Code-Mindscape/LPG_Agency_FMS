import React from 'react'
import { Button } from "@/components/ui/button"


export default function ActionsHeader({tabName, ...props}) {
  return (
    <div className='w-full h-20 bg-zinc-100/80 border flex items-center justify-center border-l-0 border-b-1 border-zinc-400/50'>
      <div className="tabName w-[20%] flex items-center justify-center">
          <h3 className='font-bold text-zinc-800 text-xl'>{tabName}</h3>
      </div>
      <div className="actionsBtn w-[80%] flex items-center justify-center">
      <Button>Shadcn Button</Button>
      </div>
    </div>
  )
}
