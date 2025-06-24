import React from 'react'
import { Container, Image } from 'react-bootstrap'
import playOffBg from '../../assets/images/playOffBg.png'
import playOffRight from '../../assets/images/playOffRight.png'
import playOffBtn from '../../assets/images/playOffBtn.png'
import './PlayOff.css'

const PlayOff = () => {
    return (
        <section>
            <Container className="customContainer">
                <div className="playOffWrapper pt-xl-5 pt-4 pb-xl-5 mt-xl-5">
                    <div className="playOff-bgWrapper position-relative ">
                        <Image
                            className="playOffBgImg"
                            src={playOffBg}
                            alt="playoff"
                            fluid
                        />
                        <Image
                            className="playOffRightImg"
                            src={playOffRight}
                            alt="playoff"
                            fluid
                        />
                        <a href="/" className="playOffBtn d-flex align-items-center justify-content-center h-100">
                            <Image className="playOffBtnImg" src={playOffBtn} fluid />
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default PlayOff