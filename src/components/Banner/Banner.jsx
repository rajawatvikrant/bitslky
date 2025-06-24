import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Banner.css";
import vendingMachImg from "../../assets/images/vendingMachine.png";
import winBig from "../../assets/images/winBigInBitsky.png";
import Coin1 from "../../assets/images/coin1.png";
import Coin2 from "../../assets/images/coin2.png";
import Coin3 from "../../assets/images/coin3.png";
import Coin4 from "../../assets/images/coin4.png";
import Coin5 from "../../assets/images/coin5.png";
import SkewButton from "./../../ui/skewButton";
import ScrollingText from "../SlidingText/SlidingText";

const Banner = () => {
  return (
    <>
      <section className="bannerMain">
        <Container fluid>
          <Row className="gap-xl-0 gap-5">
            <Col xl={6}>
              <div className="bannerLeft">
                <div className="winBigBtnWrapper text-center">
                  <div className="winBig">
                    <Image src={winBig} className="d-block mx-auto" fluid />
                  </div>
                  <SkewButton />
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className="bannerRight position-relative">
                <div className="gameMc position-relative text-center">
                  <Image src={vendingMachImg} fluid />
                </div>
                <Image src={Coin1} className="Coin1" fluid />
                <Image src={Coin2} className="Coin2" fluid />
                <Image src={Coin3} className="Coin3" fluid />
                <Image src={Coin4} className="Coin4" fluid />
                <Image src={Coin5} className="Coin5" fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ScrollingText/>
    </>
  );
};

export default Banner;
