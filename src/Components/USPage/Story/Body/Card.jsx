import React, { useState } from 'react';
import styles from "./Card.module.css"
import {Col, Row} from "react-bootstrap";
import {BsFacebook} from "react-icons/bs";
import {ImLinkedin} from "react-icons/im";
import {AiFillInstagram} from "react-icons/ai";
import {FaInstagramSquare} from "react-icons/fa";
/*import navIcon1 from "./assets/img/UsPage/nav-icon1.svg";
import navIcon2 from "../../../../../public/assets/img/UsPage/nav-icon2.svg";
import navIcon3 from "../../../../../public/assets/img/UsPage/nav-icon3.svg";*/
const Card = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (

        <Col xl={3} className={`${styles.card} ${isFlipped ? `${styles.flipped}` : ''}`} onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
            <div className={`${styles.side}  ${styles.front}`}>
                <img src={props.imgSrc} alt="Card" />
            </div>
            <div className={` row-cols ${styles.side}  ${styles.back}`}>

                <div className="info">
                    <h4>
                        {props.name}
                    </h4>
                    <h6>
                        JOB DISCRIPTION
                    </h6>
                    <p>
                        {props.description}
                    </p>

                    <div className={` ${styles.socialIcon}`}>

                        <a
                            href="##"

                        >
                            <img src="/assets/img/UsPage/nav-icon1.svg" alt="" />
                        </a>
                        <a
                            href="##"

                        >
                            <img src="/assets/img/UsPage/nav-icon2.svg" alt="" />{" "}
                        </a>
                        <a
                            href="##"

                        >
                            <img src="/assets/img/UsPage/nav-icon3.svg" alt="" />{" "}
                        </a>
                    </div>
                   </div>

            </div>
        </Col>
    );
};

export default Card;
