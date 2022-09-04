import React from "react";
import "./widget.scss";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlined from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlined from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widget = (props) => {
  const { type } = props;
  const amount = 100;
  const diff = 20;

  let data;

  if (type === `user`) {
    data = {
      title: `USERS`,
      isMoney: false,
      link: `see all users`,
      icon: (
        <PersonIcon
          className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(147, 74, 74, 0.425)",
          }}
        ></PersonIcon>
      ),
    };
  }
  if (type === `order`) {
    data = {
      title: `ORDERS`,
      isMoney: false,
      link: `view all orders`,
      icon: (
        <ShoppingCartOutlined
          className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(171, 111, 111, 0.348)",
          }}
        />
      ),
    };
  }
  if (type === `earning`) {
    data = {
      title: `EARNING`,
      isMoney: true,
      link: `view net earning`,
      icon: (
        <MonetizationOnOutlined
          className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(215, 215, 60, 0.387)",
          }}
        ></MonetizationOnOutlined>
      ),
    };
  }
  if (type === `balanace`) {
    data = {
      title: `BALANCE`,
      isMoney: true,
      link: `see details`,
      icon: (
        <AccountBalanceWalletOutlined
          className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(122, 223, 117, 0.456)",
          }}
        ></AccountBalanceWalletOutlined>
      ),
    };
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney ? `$${amount}` : `${amount}`}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp></KeyboardArrowUp>
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
