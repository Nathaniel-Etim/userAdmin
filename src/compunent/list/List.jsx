import React from "react";
import "./list.scss";
import NavBar from "../../section/NavBar/NavBar";
import SideBar from "../../section/SideBar/SideBar";
import DataTable from "../DataTable/DataTable";

function list() {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <DataTable></DataTable>
      </div>
    </div>
  );
}

export default list;
