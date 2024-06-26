import React from 'react';
import Navbar from '../Navbar/Navbar';
import ActionsHeader from '../ActionsHeader/ActionsHeader';
import { TableDemo } from '../UsersTable';

export default function Users() {
  return (
    <>
      <div className="users w-full h-screen flex flex-col">
        <Navbar />
        <div className="mainContent flex-grow w-full bg-zinc-300 flex flex-col">
          <ActionsHeader tabName={"All Users"} />
          <div className="main w-full bg-white flex flex-col items-center justify-center flex-grow">
            <div className="accounts w-[70%] flex-1">
              <TableDemo/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
