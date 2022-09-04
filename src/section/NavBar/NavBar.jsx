import React, { useContext } from "react";
import classes from "./navbar.module.scss";
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
    <div className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.search}>
          <input type="text" placeholder="search" />
          <SearchIcon></SearchIcon>
        </div>
        <div className={classes.items}>
          <div className={classes.item}>
            <LanguageIcon className={classes.icon}> </LanguageIcon>
            English
          </div>
          <div className={classes.item}>
            <DarkModeIcon
              className={classes.icon}
              onClick={setMode}
            ></DarkModeIcon>
          </div>
          <div className={classes.item}>
            <FullscreenExitIcon className={classes.icon}> </FullscreenExitIcon>
          </div>
          <div className={classes.item}>
            <NotificationsNoneIcon
              className={classes.icon}
            ></NotificationsNoneIcon>
            <div className={classes.counter}> 1</div>
          </div>
          <div className={classes.item}>
            <ChatBubbleIcon className={classes.icon}></ChatBubbleIcon>
            <div className={classes.counter}> 10 </div>
          </div>
          <div className={classes.item}>
            <ListIcon className={classes.icon}></ListIcon>
          </div>
          <div className={classes.item}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU"
              alt=""
              className={classes.avatar}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
