import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import Header from "../Header/Header";
import stylesSTR from "../../PortfolioPage/ValueProposition/StrategySystems/Body/BannerStrategySystems.module.css";
import styles from "../../YouPage/You.module.css";
import stylesBl from "./BlogPage.module.css";
import RowText from "../../PortfolioPage/ValueProposition/StrategySystems/Body/RowText";
import ColInput from "../../YouPage/Projects/Body/ColInput";

const BlogPage = () => {
  return (
      <section >
        <Container className={''} dir="">
          <Header text="BLOG "
                  classesText={`${stylesSTR.textHeader} ${styles.TitleHeader}`}
                  classes={stylesSTR.textHeaderChild}
                  nameVideo={'Header.mp4'}/>


          <RowText
              classes={styles.textHeader}
              textOne={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "}
          />



          <Row  xl={6} className={` row justify-content-center `}>

            <ColInput
                xl={3}
                classInput={`${styles.input} ${stylesBl.inputImg_1}`}
                placeholder={"Date"}
            />

            <ColInput
                xl={3}
                classInput={`${styles.input} ${stylesBl.inputImg_2}`}
                placeholder={"Domain (s)"}
            />
            <ColInput
                xl={3}
                classInput={`${styles.input} ${stylesBl.inputImg_3}`}
                placeholder={"Author"}
            />
          </Row>
          <Row  xl={6} className={` row justify-content-center `}>
            <ColInput
                xl={9}
                classesCol={`${styles.colInput} col-md-9`}
                classInput={`${styles.input} ${styles.inputT} `}
                placeholder={"Title"}
            />
          </Row>
          <Row  xl={6} className={` row justify-content-center `}>
            <ColInput
                xl={9}
                classesCol={`${styles.colInput} col-md-9`}
                classInput={`${styles.input} ${styles.inputT}  ${stylesBl.inputImg_4} `}
                placeholder={"Nationality"}
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

export default BlogPage