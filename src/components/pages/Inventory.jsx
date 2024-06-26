import React from "react";
import Navbar from "../Navbar/Navbar";
import ActionsHeader from "../ActionsHeader/ActionsHeader";
import { ProductsTable } from "../tables/ProductsTable";
import SubNav from "../Navbar/SubNav";

export default function Inventory() {
  return (
    <>
      <ActionsHeader searchText={"Products"} tabName={"Current Stock"} />
      <div className="main w-full bg-white flex items-center justify-center flex-grow">
        <div className="accounts h-full flex items-start justify-start flex-grow max-w-[85%]">
          <div className="wrapper overflow-y-auto max-h-[430px] w-full">
            <ProductsTable />
          </div>
        </div>
      </div>
    </>
  );
}
