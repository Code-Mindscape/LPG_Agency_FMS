import React from 'react'
import { Button } from "@/components/ui/button"
import { ComboboxDemo } from './combobox'
import { DropdownMenuCheckboxes } from './dropdown';
import { InputWithButton } from './searchBox';
import { ListFilter } from 'lucide-react';
import { FileDown } from 'lucide-react';
import { Download } from 'lucide-react';


export default function ActionsHeader({tabName, ...props}) {
  return (
    <div className='w-full h-20 bg-white border flex items-center justify-center border-l-0 border-b-1 border-zinc-400/50'>
      <div className="tabName w-[20%] flex items-center justify-center">
          <h3 className='font-bold text-zinc-700 text-2xl'>{tabName}</h3>
      </div>
      <div className="actionsBtn w-[80%] flex items-center justify-end">
        <div className="actions flex items-center justify-center gap-8 px-10 h-full">
        <div className="searchButtons  w-[70%] flex items-center justify-center gap-3">
        <InputWithButton searchText={props.searchText}/>
        </div>
        <div className="buttons w-[40%] flex items-center justify-center gap-3">
        <Button variant="outline">
        <Download size={18}/>
        </Button>
        <Button variant="outline">
        <ListFilter size={18}/>
        </Button>
        <Button >Add new</Button>
        </div>
        </div>
      </div>
    </div>
  )
}

