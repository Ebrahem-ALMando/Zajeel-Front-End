import React from 'react'
import styles from "./BannerStrategySystems.module.css"
import {Col, Container, Row} from "react-bootstrap";
import Header from "../../../Header/Header";
import {useTranslation} from "react-i18next";
import RowImg from "../../../RowImg";
import RowText from "./RowText";
const BannerStrategySystems = () => {
  const[tKey,i18n]=useTranslation();
  return (
      <section >
        <Container className={''} dir="">
          <Header text="PORTFOLIO "
                  classesText={styles.textHeader}
                  classes={styles.textHeaderChild}
                  textContent="Strategy & Systems" nameVideo={'Header.m4v'}/>/
            <RowImg classImg={styles.Img} nameImg={"StrategySystems_1.png"}/>


            <RowText textOne={"Together, we develop business direction and outcomes, using analytical and innovative methodologies to develop"}
                     textOneSpan={" Business Models, Plans, and Strategies, "}
                     textTow={"and to identify objectives, indicators, and initiatives, and developing"}
                     textTowSpan={" Business Architecture "}
                     textThree={"of capabilities, data, processes, products/services, functions, and stakeholders."}
            />
            <RowImg classImg={styles.imgBody} nameImg={"Component 1 – 1.png"}/>
            <RowText textOne={"We design organizational systems that realize business models and strategies, through"}
                     textOneSpan={" Governance, Performance Management, Risk Management, Compliance Management, and Quality /Excellence Frameworks, "}
                     textTow={"which interconnects systems, components, and elements together into a continual and sustainable improvement approach, that fulfills strategy and satisfies stakeholders inspirations."}
            />
            <Row  xl={6} className={` row justify-content-center  ${styles.rowVid}`}>

                <Col xl={4} className={`col-auto ${styles.textVideo}`} >
                    <p >
                        {tKey('We foster strategies and systems through')}
                        <span className={styles.textColor}>
                            {tKey(' Organizational Culture ')}
                        </span>
                        {tKey('identification and development, as a core enabler to direct visions, behaviors, resources allocation and utilization, as well as results understanding and evaluation.')}
                    </p>
                </Col>
                <Col xl={6} className={`col-auto `} >
                    <video   className={`${styles.vidC}`} autoPlay={true}  loop={true} muted     >
                        <source src='/assets/video/PortfolioPage/Tree.mp4'/>
                    </video>
                </Col>
            </Row>
            <RowText textOne={"Our strategy and systems expertise in QUAIM Global are offered to you, so you empower your organizations in a resilient and responsive manner with internal and external variables, and make the shifts for your clients, teams, and societies. "}
            />

        </Container>
      </section>
  )
}

export default BannerStrategySystems