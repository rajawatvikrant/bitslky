import React from "react";
import footerLogo from "../../assets/images/footerLogo.png";
import telegram from "../../assets/images/telegram.svg";
import discord from "../../assets/images/discord.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import youtube from "../../assets/images/youtube.svg";
import "./Footer.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footerMain">
      <Container className="footer-container">
        <div className="footer-wrapper">
          <div className="footerLogoWrapper">
            <a href="#">
              <img src={footerLogo} alt="logo" />
            </a>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="footerCol">
            <h4>Platform</h4>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#">Casino</a>
              </li>
              <li>
                <a href="#">Sportsbook</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footerCol">
            <h4>About us</h4>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">How To Play</a>
              </li>
            </ul>
          </div>
          <div className="footerCol">
            <h4>Contact</h4>
            <ul className="list-unstyled footer-links contact-links">
              <li>
                <span>Support :</span>
                <a href="mailto:someone@example.com">support@bitsky.com</a>
              </li>
              <li>
                <span>Partners :</span>
                <a href="mailto:partners@bitsky.com">partners@bitsky.com</a>
              </li>
              <li>
                <span>Legal :</span>
                <a href="mailto:legal@bitsky.com">legal@bitsky.com</a>
              </li>
            </ul>
            <ul className="list-unstyled social-links">
              <li>
                <a className="social-telegram">
                  <img src={telegram} />
                </a>
              </li>
              <li>
                <a className="social-discord">
                  <img src={discord} />
                </a>
              </li>
              <li>
                <a className="social-twitter">
                  <img src={twitter} />
                </a>
              </li>
              <li>
                <a className="social-instagram">
                  <img src={instagram} />
                </a>
              </li>
              <li>
                <a className="social-youtube">
                  <img src={youtube} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="footer-divider" />
        <p className="footer-rights">2024 Bitsky.bet, All Rights Reserved</p>
      </Container>
    </footer>
  );
};

export default Footer;
