import React from "react";
import ActionsHeader from "./ActionsHeader/ActionsHeader";
import { ReturnsTable } from "./tables/ReturnsTable";
export default function Return() {
  return (
    <>
      <ActionsHeader searchText={"Returns"} tabName={"Returns"} />
      <div className="main w-full bg-white flex items-center justify-center flex-grow">
        <div className="accounts h-full flex items-start justify-start flex-grow max-w-[85%]">
          <div className="wrapper overflow-y-auto max-h-[430px] w-full">
            <ReturnsTable />
          </div>
        </div>
      </div>
    </>
  );
}
