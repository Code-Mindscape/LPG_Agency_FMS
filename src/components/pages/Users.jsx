import React from 'react';
import Navbar from '../Navbar/Navbar';
import ActionsHeader from '../ActionsHeader/ActionsHeader';
import { TableDemo } from '../UsersTable';
import UserDetailsBox from '../UserDetailsBox';

export default function Users() {
  return (
    <>
      <div className="users w-full h-screen flex flex-col">
        <Navbar />
        <div className="mainContent flex-grow w-full bg-zinc-300 flex flex-col">
          <ActionsHeader tabName={"All Users"} />
          <div className="main w-full bg-white flex items-center justify-center flex-grow">
            <div className="accounts  h-full flex items-start justify-start flex-grow max-w-[70%]">
              <div className="wrapper overflow-y-auto max-h-[500px] w-full">
              <TableDemo/>
              </div>
            </div>
            <div className="accountDetails w-[30%] h-full border border-l-1 border-t-0 border-r-0 border-b-[0] border-zinc-400/50">
            <UserDetailsBox/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
