import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import Header from "../../Header/Header";
import stylesSTR from "../../../PortfolioPage/ValueProposition/StrategySystems/Body/BannerStrategySystems.module.css";
import styles from "../../You.module.css";
import RowText from "../../../PortfolioPage/ValueProposition/StrategySystems/Body/RowText";
import ColInput from "../../Projects/Body/ColInput";

const BannerTestimonials = () => {
  return (
      <section >
        <Container className={''} dir="">
          <Header text="Testimony"
                  classesText={`${stylesSTR.textHeader} ${styles.TitleHeader}`}
                  classes={stylesSTR.textHeaderChild}
                  nameVideo={'Header.m4v'}/>
          <RowText
              classes={styles.textHeader}
              textOne={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "}
          />



          <Row  xl={6} className={` row justify-content-center `}>

            <ColInput
                xl={3}
                classInput={`${styles.input} ${styles.inputImg_1}`}
                placeholder={"Client Name"}
            />

            <ColInput
                xl={3}
                classInput={`${styles.input} ${styles.inputImg_2}`}
                placeholder={"Project"}
            />
            <ColInput
                xl={3}
                classInput={`${styles.input} ${styles.inputImg_3}`}
                placeholder={"shift required"}
            />
          </Row>
          <Row  xl={6} className={` row justify-content-center `}>
            <ColInput
                xl={9}
                classesCol={`${styles.colInput} col-md-9`}
                classInput={`${styles.input} ${styles.inputT} `}
                placeholder={"full Title for project "}
            />
          </Row>
          <Row  xl={6} className={` row justify-content-center `}>
            <ColInput
                xl={9}
                classesCol={`${styles.colInput} col-md-9`}
                classInput={`${styles.input} ${styles.inputT}  ${styles.inputImg_4} `}
                placeholder={"Shift acquired"}
            />
          </Row>
          <Row  xl={6} className={` row justify-content-center `}>
            <Col xl={9} className={`col-auto  col-md-9 ${styles.colInput}`} >
                  <textarea
                      className={styles.textArea}
                      rows={11}
                      placeholder={"description"}
                  />
            </Col>
          </Row>

        </Container>
      </section>
  )
}

export default BannerTestimonials