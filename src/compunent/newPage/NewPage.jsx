import React, { useState } from "react";
import NavBar from "../../section/NavBar/NavBar";
import SideBar from "../../section/SideBar/SideBar";
import "./newPage.scss";
import DriveFolderUploadOutlined from "@mui/icons-material/DriveFolderUploadOutlined";

const NewPage = ({ input, title }) => {
  const [isFile, setFile] = useState(``);

  const changeImgHandeler = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="new">
      <SideBar></SideBar>
      <div className="newContainer">
        <NavBar></NavBar>
        <div className="top">
          <h1> {title} </h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                isFile
                  ? URL.createObjectURL(isFile)
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJietdKWcc9PoouP-8sR1vR6wqqjrVrxy5Z25ukc7cMUU-6oLJedGyWdlolQ21UNz07k&usqp=CAU"
              }
              alt="DP"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  image <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="File"
                  placeholder="jonas"
                  id="file"
                  onChange={changeImgHandeler}
                  style={{ display: "none" }}
                />
              </div>
              {input.map((el) => {
                return (
                  <div className="formInput" key={el.id}>
                    <label htmlFor="">{el.label}</label>
                    <input type={el.type} placeholder={el.placeholder} />
                  </div>
                );
              })}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
