import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import styles from "./Ourteam.module.css";
import Card from "./Card";
import {useTranslation} from "react-i18next";

const Ourteam = () => {
    const[tKey,i18n]=useTranslation();
  return (
      <section className={`${styles.OurteamSec}`}>
      <Container className={``} dir="">
          <Row  xl={6} className={` row justify-content-center `}>
              <Col xl={8} className={`col-auto  `}>
                  <h1 className={`${styles.textOurteam}`} >
                      {tKey('Our Team')}
                  </h1>

              </Col>
          </Row>
      <Row  xl={12} className={`text-center justify-content-around  align-items-center  row w-100 ${styles.Cards}`}>
            <Card
                imgSrc={'/assets/img/UsPage/userTeam.jpg'}
                name={"ebrahem Al Mando"}
                description={"responsible for writing, testing, and maintaining code to create software applications or improve existing ones. They use programming languages like Python, Java, or C++ to translate algorithms and designs into functional programs. Attention to detail, logical thinking, and problem-solving skills are important"}

            />
            <Card
                imgSrc={'/assets/img/UsPage/userTeam.jpg'}
                name={"Ahmad Al Maged"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. \n" +
                    "\n" +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "}
            />
            <Card
                imgSrc={'/assets/img/UsPage/userTeam.jpg'}
                name={"Ms.Ahmad Al Rashed"}
                description={"responsible for writing, testing, and maintaining code to create software applications or improve existing ones. They use programming languages like Python, Java, or C++ to translate algorithms and designs into functional programs. Attention to detail, logical thinking, and problem-solving skills are important"}

            />
      </Row>
      </Container>
      </section>
  )
}

export default Ourteam