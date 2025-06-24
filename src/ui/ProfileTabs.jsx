import { useState } from "react";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import tabTitle from "../assets/images/tabTitle.png";
import formLeftImg from "../assets/images/formLeftImg.png";
import leftCorner from "../assets/images/leftCorner.png";
import rightCorner from "../assets/images/rightCorner.png";
import rightBottomCorner from "../assets/images/rightBottomCorner.png";
import leftBottomCorner from "../assets/images/leftBottomCorner.png";
import Account from "../components/Account/Account";

function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("My-Account");
  

  return (
    <div className="ProfileTabs min-vh-100 py-5">
      <Container className="customContainer">
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          id="ProfileTabsWrapper"
          fill
        >
          <Tab eventKey="My-Account" title="My Account">
            <Account/>
          </Tab>
          <Tab eventKey="Wallet" title="Wallet">
            <h1 className="text-center">Wallet</h1>
            <div className="formTabCorners">
                <span className="leftCorner">
                  <img src={leftCorner} alt="" />
                </span>
                <span className="rightCorner">
                  <img src={rightCorner} alt="" />
                </span>
                <span className="leftBottomCorner">
                  <img src={leftBottomCorner} alt="" />
                </span>
                <span className="rightBottomCorner">
                  <img src={rightBottomCorner} alt="" />
                </span>
              </div>
          </Tab>
          <Tab eventKey="All-Transactions" title="All Transactions">
            <h1 className="text-center">All Transactions</h1>
            <div className="formTabCorners">
                <span className="leftCorner">
                  <img src={leftCorner} alt="" />
                </span>
                <span className="rightCorner">
                  <img src={rightCorner} alt="" />
                </span>
                <span className="leftBottomCorner">
                  <img src={leftBottomCorner} alt="" />
                </span>
                <span className="rightBottomCorner">
                  <img src={rightBottomCorner} alt="" />
                </span>
              </div>
          </Tab>
          <Tab eventKey="My-Affiliates" title="My Affiliates">
            <h1 className="text-center"> My Affiliates</h1>
            <div className="formTabCorners">
                <span className="leftCorner">
                  <img src={leftCorner} alt="" />
                </span>
                <span className="rightCorner">
                  <img src={rightCorner} alt="" />
                </span>
                <span className="leftBottomCorner">
                  <img src={leftBottomCorner} alt="" />
                </span>
                <span className="rightBottomCorner">
                  <img src={rightBottomCorner} alt="" />
                </span>
              </div>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default ProfileTabs;
