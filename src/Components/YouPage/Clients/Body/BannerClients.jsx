import React from 'react'
import styles from "../../You.module.css"
import stylesSTR from "../../../PortfolioPage/ValueProposition/StrategySystems/Body/BannerStrategySystems.module.css"
import Header from "./../../Header/Header";
import {Col, Container, Row} from "react-bootstrap";

import ColInput from "../../Projects/Body/ColInput";
import RowText from "../../../PortfolioPage/ValueProposition/StrategySystems/Body/RowText";


const BannerClients = () => {
    return (
        <section >
            <Container className={''} dir="">
                <Header text="Clients "
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
                        classInput={`${styles.input} ${styles.inputImgCL_1}`}
                        placeholder={"sector"}
                    />

                    <ColInput
                        xl={3}
                        classInput={`${styles.input} ${styles.inputImgCL_2}`}
                        placeholder={"nature"}
                    />
                    <ColInput
                        xl={3}
                        classInput={`${styles.input} ${styles.inputImgCL_3}`}
                        placeholder={"domain"}
                    />
                </Row>
                <Row  xl={6} className={` row justify-content-center `}>
                    <ColInput
                        xl={9}
                        classesCol={`${styles.colInput} col-md-9`}
                        classInput={`${styles.input} ${styles.inputT} `}
                        placeholder={"title"}
                    />
                </Row>
                <Row  xl={6} className={` row justify-content-center `}>
                    <ColInput
                        name={"LocClient"}
                        xl={9}
                        classesCol={`${styles.colInput} col-md-9`}
                        classInput={`${styles.input} ${styles.inputT}  ${styles.inputImg_2} `}
                        placeholder={"location"}
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

export default BannerClients