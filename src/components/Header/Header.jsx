import React from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import "./Header.css";
import bigWin from "../../assets/images/bigWin.png";
import plusBlack from "../../assets/images/plusBlack.svg";
import user from "../../assets/images/user.png";
import headerRightBg from "../../assets/images/headerBg.png";
import headerLogo from "../../assets/images/headerLogo.png";

const AccountHeader = () => {
  return (
    <>
      <div className="nav-header">
        <Link to="/" className="nav-logo">
          <img src={headerLogo} alt="logo" />
          <h2>In Bitsky</h2>
        </Link>
        <div className="nav-right">
          <div className="nav-right-inner">
            <img className="nav-right-bg" src={headerRightBg} alt="" />
            <img className="nav-brand-logo" src={bigWin} alt="logo" />
            <div className="wallet-info">
              <span>10,000</span>
              <span>USD</span>
              <Button className="btn-add">
                <img src={plusBlack} alt="add" />
              </Button>
            </div>
            <Dropdown className="user-dropdown">
              <Dropdown.Toggle id="user-menu">
                <img className="user-avatar" src={user} alt="user" />
                <span>John123</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="nav-mobile">
        <img className="nav-brand-logo" src={bigWin} alt="logo" />
        <div className="wallet-info">
          <span>10,000</span>
          <span>USD</span>
          <Button className="btn-add">
            <img src={plusBlack} alt="add" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default AccountHeader;
