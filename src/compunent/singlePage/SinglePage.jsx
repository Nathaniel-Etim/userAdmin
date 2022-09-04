import React from "react";
import NavBar from "../../section/NavBar/NavBar";
import SideBar from "../../section/SideBar/SideBar";
import Chart from "../chart/Chart";
import Table from "../../compunent/table/Table";
import "./singlePage.scss";

function SinglePage() {
  return (
    <div className="single">
      <SideBar></SideBar>
      <div className="singleContainer">
        <NavBar></NavBar>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title"> Information</h1>
            <div className="item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJietdKWcc9PoouP-8sR1vR6wqqjrVrxy5Z25ukc7cMUU-6oLJedGyWdlolQ21UNz07k&usqp=CAU"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">jane deo</h1>
                <div className="detailItem">
                  <spam className="itemKey">Email:</spam>
                  <spam className="itemValue">janedeo@gmail.com</spam>
                </div>{" "}
                <div className="detailItem">
                  <spam className="itemKey">phone no:</spam>
                  <spam className="itemValue">08113779150</spam>
                </div>{" "}
                <div className="detailItem">
                  <spam className="itemKey">Address:</spam>
                  <spam className="itemValue"> 33 sam obot street</spam>
                </div>{" "}
                <div className="detailItem">
                  <spam className="itemKey">country:</spam>
                  <spam className="itemValue">Nigeria</spam>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={3 / 1}
              title=" user spending last six(6) month"
            ></Chart>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title"> last transactions </h1>
          <Table></Table>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
