import React from "react";
import Marquee from "react-fast-marquee";
import { Image } from "react-bootstrap";
import downloadIcon from "../../assets/images/downloadIcon.gif";
import "./SlidingText.css"; 

const ScrollingText = () => {
  return (
    <div className="scrollingTextMain position-relative">
      <Marquee speed={150} gradient={false} className="d-flex flex-row justify-content-between align-items-center gap-md-5 gap-4 font-ceviche ">
          <p className="scrolling-text mx-5 py-5">
            Welcome to <span>Bitsky</span>
          </p>
          <p className="scrolling-text mx-5 py-5">
            Welcome to <span>Bitsky</span>
          </p>
          <p className="scrolling-text mx-5 py-5">
            Welcome to <span>Bitsky</span>
          </p>
          <p className="scrolling-text mx-5 py-5">
            Welcome to <span>Bitsky</span>
          </p>
      </Marquee>

      <div className="downloadGif d-flex justify-content-center align-items-center position-absolute">
          <Image src={downloadIcon} fluid />
      </div>
    </div>
  );
};

export default ScrollingText;
