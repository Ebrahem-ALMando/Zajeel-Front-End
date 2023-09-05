import {Col, Container, Row} from "react-bootstrap";
import styles from './ContactUsPage.module.css'
import stylesY from "./../YouPage/You.module.css"
import {useTranslation} from "react-i18next";
import RowText from "../PortfolioPage/ValueProposition/StrategySystems/Body/RowText";
import ColInput from "../YouPage/Projects/Body/ColInput";
import {Link} from "react-router-dom";
import Contactus from "../Footer/Contactus";

import ContactUSContext from "../Context/Context";
import {useEffect} from "react";
const ContactUsPage = () => {
    const[tKey,i18n]=useTranslation();
/*    let contactBTN;
useEffect(()=>{
     contactBTN=document.getElementById("contactBTN");
    contactBTN.style.display='none'

},contactBTN)*/
  return (
      <section className={`${styles.contactUs}`} >

        <Row className={` justify-content-around align-items-center ${styles.headerRow}`}>
            <Col xl={5} className={`col-auto ${styles.textHeader}`} >
                <h2 className={`${styles.title}`}>
                    Contact us
                </h2>
                <p className={`${styles.titleP}`}>
                    {tKey('We\'re here to help')}
                </p>
            </Col>
        </Row>
          <Container className={`${styles.containerContact}`} dir="">
          <Row className={` justify-content-center align-items-center  mt-5`}>
              <Col xl={6} className={`col-auto ${styles.text} text-center`} >
                  <h2 className={`${styles.title} ${styles.titleCenter} `}>
                      Contact us
                  </h2>

              </Col>
          </Row>
          <RowText
              classes={styles.text}
              textOne={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. "}
          />
              <Row  xl={6} className={` row justify-content-center `}>

                  <ColInput
                      classesCol={` ${styles.colInput} `}
                      xl={4}
                      classInput={`${stylesY.input} ${styles.inputImg_1}`}
                      placeholder={" Name"}
                  />

                  <ColInput
                      classesCol={` ${styles.colInput}`}
                      xl={4}
                      classInput={`${stylesY.input} ${styles.inputImg_2}`}
                      placeholder={"surname"}
                  />

              </Row>
              <Row  xl={6} className={` row justify-content-center `}>
                  <ColInput
                      xl={8}
                      classesCol={`${stylesY.colInput} ${styles.colInput} col-md-9`}
                      classInput={`${stylesY.input} ${stylesY.inputT}  ${styles.inputImg_3} `}
                      placeholder={"Email"}
                  />
              </Row>
              <Row  xl={6} className={` row justify-content-center `}>
                  <ColInput
                      xl={8}
                      classesCol={`${stylesY.colInput} ${styles.colInput} col-md-9`}
                      classInput={`${stylesY.input} ${stylesY.inputT}  ${styles.inputImg_4} `}
                      placeholder={"Subject"}
                  />
              </Row>
              <Row  xl={6} className={` row justify-content-center `}>
                  <Col xl={8} className={`col-auto  col-md-9 ${stylesY.colInput} ${styles.colInput}`} >
                  <textarea
                      className={`${stylesY.textArea} ${styles.textArea}`}
                      rows={11}
                      placeholder={"Message"}
                  />
                  </Col>
              </Row>
                <Contactus text={"Send"}/>
          </Container>
      </section>
  )
}

export default ContactUsPage