import React, { useContext } from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ListIcon from "@mui/icons-material/List";
import { DarkModeContext } from "../../context/DarkModeContext";

const NavBar = () => {
  const ctx = useContext(DarkModeContext);

  const setMode = () => {
    ctx.dispatchStateFn({ type: `TOOGLE` });
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search" />
          <SearchIcon classMame="searchIcon"></SearchIcon>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon"> </LanguageIcon>
            English
          </div>
          <div className="item">
            <DarkModeIcon className="icon" onClick={setMode}></DarkModeIcon>
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon"> </FullscreenExitIcon>
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon"></NotificationsNoneIcon>
            <div className="counter"> 1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon className="icon"></ChatBubbleIcon>
            <div className="counter"> 10 </div>
          </div>
          <div className="item">
            <ListIcon className="icon"></ListIcon>
          </div>
          <div className="items">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
