import React from "react";
import youtubeSocial from "../../assets/images/yotubeSocial.svg";
import instaSocial from "../../assets/images/instaSocial.svg";
import twichSocial from "../../assets/images/twichSocial.svg";
import fbSocial from "../../assets/images/fbSocial.svg";
import whatsappSocial from "../../assets/images/whatsaappSocial.svg";
import tiktokSocial from "../../assets/images/tiktokSocial.svg";
import socialMediaTitle from "../../assets/images/SocialMediaTitle.png";
import "./SocialMedia.css";
import { Container, Image } from "react-bootstrap";

const SocialMedia = () => {
  const socialMediaLinks = [
    { img: youtubeSocial, name: "Youtube", link:null },
    { img: instaSocial, name: "Instagram", link:null },
    { img: twichSocial, name: "Twitch", link:null },
    { img: fbSocial, name: "Facebook", link:null },
    { img: whatsappSocial, name: "Whatsapp", link:null },
    { img: tiktokSocial, name: "TikTok", link:null },
  ];

  return (
    <section className="socialMedia pt-5 mt-md-5 mt-4">
      <Container className="custom-container">
        <div className="socialMedia_wrapper">
          <a href="#" className="socialMedia_title d-flex">
            <Image src={socialMediaTitle} alt="" className="w-100" fluid />
          </a>
          <div className="socialMedia_content d-flex align-items-center justify-content-between">
            <h2 className="text-white">Follow Us on</h2>
            <div className="socialMedia_linksMain">
              {socialMediaLinks.map((social, index) => (
                <div key={index} className="socialMedia_linkBox">
                  <Image src={social.img} alt={social.name} fluid />
                  <h4>{social.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SocialMedia;
