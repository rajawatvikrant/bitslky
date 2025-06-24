import React from "react";
import { Container, Image } from "react-bootstrap";
import game1 from "../../assets/images/game1.png";
import game2 from "../../assets/images/game2.png";
import game3 from "../../assets/images/game3.png";
import game4 from "../../assets/images/game4.png";
import game5 from "../../assets/images/game5.png";
import game6 from "../../assets/images/game6.png";
import game7 from "../../assets/images/game7.png";
import game8 from "../../assets/images/game8.png";
import game9 from "../../assets/images/game9.png";
import game10 from "../../assets/images/game10.png";
import GameCard from "../../ui/gameCard";
import "./Games.css";

const allGames = [
  { image: game1, link: null },
  { image: game2, link: null },
  { image: game3, link: null },
  { image: game4, link: null },
  { image: game5, link: null },
  { image: game6, link: null },
  { image: game7, link: null },
  { image: game8, link: null },
  { image: game9, link: null },
  { image: game10, link: null }
];

const GamesSection = () => {
  return (
    <section className="GamesSecMain mb-5 pb-5">
      <Container className="customContainer">
        <div className="titleWrapper text-center d-flex align-items-center justify-content-center mb-md-5 mb-4 position-relative">
          <h2 className="font-ceviche text-white">Popular Games</h2>
        </div>
        <div className="gamesWrapper">
          {allGames.map((item,index) => (
            <GameCard  key={index} image={item.image} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GamesSection;
