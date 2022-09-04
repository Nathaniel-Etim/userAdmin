import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import NavBar from "../../section/NavBar/NavBar";
import SideBar from "../../section/SideBar/SideBar";
import Chart from "../chart/Chart";
import Features from "../feature/Features";
import TableList from "../table/Table";
import Widget from "../widgets/Widget";
import "./home.scss";

const Home = (props) => {
  const ctx = useContext(DarkModeContext);
  console.log(ctx);

  return (
    <div className="home">
      <SideBar />
      <div className="homecontainer">
        <NavBar></NavBar>
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balanace" />
        </div>
        <div className="charts">
          <Features />
          <Chart title="last 6 month revenue" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle"> Latest transaction </div>
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Home;
