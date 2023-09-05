import React, {useEffect} from "react";
import styles from "./BannerCapabilityDevelopment.module.css";
import Header from "../../../Header/Header";
import { Col, Container, Row} from "react-bootstrap";
import stylesSTR from "../../StrategySystems/Body/BannerStrategySystems.module.css"
import RowText from "../../StrategySystems/Body/RowText";
import RowImg from "../../../RowImg";
import CardCA from "./CardCA";
import {useTranslation} from "react-i18next";
const BannerCapabilityDevelopment = () => {
    const[tKey,i18n]=useTranslation();
    useEffect(()=>{
        const video = document.getElementById('vidioB');
        video.onplay = function() {
            const loopStartTime = 19;
            video.ontimeupdate = function() {
                if (video.currentTime >= loopStartTime) {
                    video.currentTime = 0;
                }
            };
        };
    },[])
  return (
        <>
      <section >
        <Container className={''} dir="">
          <Header text="PORTFOLIO "
                  classesText={stylesSTR.textHeader}
                  classes={`${stylesSTR.textHeaderChild} ${styles.textHeaderChild}`}
                  textContent="Capability Development" nameVideo={'Header.m4v'}/>
          <RowText
              classes={styles.textHeader}
              textOne={"Organizational capability is the combination of resources, expertise, knowledge, skills, technology, and work environment, which are all-together weaved and orchestrated to deliver value."}
          />
            <RowImg classImg={styles.Img} nameImg={"CapabilityDevelopment_1.png"}/>
            <RowText

                textOne={"We believe in QUAIM Global in the importance of the continual development and institutionalization of capabilities, to achieve the competitive/comparative value of the organization, through focusing our contributions to the development investments on three components of capabilities, that the other elements of resources, expertise, knowledge, skills, technology, and work environment revolve around them. These capabilities are:"}
            />
            <Row  xl={6} className={` row justify-content-center `}>
                <CardCA
                    nameImg={"CardImage_1.png"}
                    textTitle={"Knowledge"}
                    textTitleContent={"(Strength of the Organization)"}
                    textBody={"Knowledge capability is the real competitive/comparative capital of organizations, which is a triad of (1) Human Capital of people (2) Relational Capital with Stakeholders, and (3) Structural Capital, which articulates organizational knowledge, memory, and experience into systems, practices, databases, and training materials/guides."}
                />
                <CardCA
                    nameImg={"CardImage_2.png"}
                    textTitle={"Transformational"}
                    textTitleContent={"(Agility of the Organization) "}
                    textBody={"Transformational capability is what preserves organizational agility to respond to changes, exploit opportunities, and address risks. It is mainly concerned with fostering the dynamic strategic capabilities (valid to perform and produce under different variants and settings), and optimizing strategic focus, and innovation."}
                />
                <CardCA
                    nameImg={"CardImage_3.png"}
                    textTitle={"Sustainability"}
                    textTitleContent={"(Endurance of the Organization)"}
                    textBody={"Sustainability capability is mainly concerned with maintaining organization’s continuity in value offering, on both short-term (value levels, operational recovery, and minimizing periods of outage and stagnation), and on the long-term (value and vision renewal, and organization re-invention)"}
                />
            </Row>

        </Container>
              <video id="vidioB" className={` ${styles.vidioBody}   `}

                     autoPlay={true}  loop={true}   muted   >
                  <source src="/assets/video/PortfolioPage/Paralax.m4v"/>
              </video>
          <Container>
              <Row  xl={6} className={` row justify-content-center `}>
                  <Col xl={10} className={`col-auto ${styles.TextFooter}`} >
                      <p className={` ${styles.textF}`}>
                          {tKey('We employ our knowledge and expertise in QUAIM Global in capability development to improve your organizations competitive/comparative advantages, and make the shifts for your clients, teams, and societies')}
                      </p>
                  </Col>
              </Row>

          </Container>
      </section>

    </>
  )
};

export default BannerCapabilityDevelopment;
