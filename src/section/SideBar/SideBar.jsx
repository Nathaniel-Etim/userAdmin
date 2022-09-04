import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import CategoryIcon from "@mui/icons-material/Category";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DnsIcon from "@mui/icons-material/Dns";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { DarkModeContext } from "../../context/DarkModeContext";

const SideBar = () => {
  const ctx = useContext(DarkModeContext);

  const ModeLight = () => {
    ctx.dispatchStateFn({ type: `LIGHT` });
  };

  const ModeDark = () => {
    ctx.dispatchStateFn({ type: `DARK` });
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo"> Nath-Admin </span>
        </Link>
      </div>
      <hr></hr>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"></DashboardIcon>
            <span>DashBoard</span>
          </li>
          <p className="title">LIST</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon"></PersonIcon>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <CategoryIcon className="icon"></CategoryIcon>
              <span>Product</span>
            </li>
          </Link>
          <li>
            <ListAltIcon className="icon"></ListAltIcon>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"></LocalShippingIcon>
            <span>Delivery</span>
          </li>
          <p className="title"> USEFULL </p>
          <li>
            <QueryStatsIcon className="icon"></QueryStatsIcon>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon"></NotificationsIcon>
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <DnsIcon className="icon"></DnsIcon>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon"></PsychologyIcon>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon"></SettingsIcon>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountBoxIcon className="icon"></AccountBoxIcon>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"></LogoutIcon>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="coloroption" onClick={ModeLight}></div>
        <div className="coloroption" onClick={ModeDark}></div>
      </div>
    </div>
  );
};

export default SideBar;
