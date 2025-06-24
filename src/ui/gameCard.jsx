import React from 'react'
import heart from "../assets/images/heart.svg";
import SkewButton from './skewButton';
import { Image } from 'react-bootstrap';

const GameCard = ({image,link}) => {
    return (
        <div className="gameCard">
            <img src={image} alt="top game" />
            <div className="heartIcon d-flex justify-content-end align-items-center position-absolute rounded-circle">
                <Image src={heart} alt="favorite" />
            </div>
            <SkewButton className='gameBtn' />
        </div>
    )
}

export default GameCard