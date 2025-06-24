import React from "react";
import referralCard1 from "../../assets/images/referralCard1.png";
import referralCard2 from "../../assets/images/referralCard2.png";
import maleChar from "../../assets/images/maleCharacter.png";
import femaleChar from "../../assets/images/femaleCharacter.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./ReferSection.css";
import SkewButton from "../../ui/skewButton";
import PlayOff from "../PlayOff/PlayOff";

const ReferSection = ({...props}) => {
  return (
    <div className="referralSection py-5" {...props}>
      <Container className="custom-container py-md-5 mt-md-5 py-4">
        <Row className="gap-xl-0 gap-5">
          <Col xl={6}>
            <div className="refCardMain refCardLeft position-relative">
              <Image src={referralCard1} className="w-100 refCardBgImg" fluid />
              <Row className="refCardContent p-md-0 m-0 align-items-center">
                <Col  className="m-0 p-0 align-self-end">
                  <Image src={maleChar} className="gameChar" fluid />
                </Col>
                <Col  className="m-md-0 mx-2 text-white refContentWrapper">
                  <h2 className="font-ceviche lh-1">Refer Your Friend and Earn Rewards!</h2>
                  <p>
                    Refer your friends and enjoy exclusive bonuses and
                    discounts.
                  </p>
                  <SkewButton className="playBtn" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col xl={6}>
            <div className="refCardMain refCardRight position-relative">
              <Image src={referralCard2} className="w-100 refCardBgImg" fluid />
              <Row className="refCardContent p-md-0 m-0 align-items-center flex-row-reverse">
                <Col  className="m-0 p-0 align-self-end">
                  <Image src={femaleChar} className="gameChar" fluid />
                </Col>
                <Col  className="m-md-0 mx-2 text-white text-end  pt-md-4 refContentWrapper">
                  <h2 className="font-ceviche lh-1">Where the excitement knows no bounds</h2>
                  <p>
                    Experience unparalleled joy with our exclusive perks, from high-stakes adventures to unforgettable triumphs!
                  </p>
                  <SkewButton className="playBtn playBtn2" />
                </Col>
              </Row>
            </div>
          </Col>
          <Col  className="text-center mt-md-5">
            <PlayOff /> 
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReferSection;
