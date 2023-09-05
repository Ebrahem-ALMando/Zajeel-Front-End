import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import Header from "../../Header/Header";
import {useTranslation} from "react-i18next";
import styles from './BannerCustomerCentricity.module.css'
import RowImg from "../../RowImg";
const BannerCustomerCentricity = () => {
  const[tKey,i18n]=useTranslation();
  return (
      <section >
        <Container className={''} dir="">
          <Header text="PORTFOLIO "
                  classesText={styles.textHeader}
                  classes={styles.textHeaderChild}
                  textContent=" CUSTOMER CENTRICITY" nameVideo={'Header.m4v'}/>/

     {/*     <Row  xl={12} className={` row justify-content-center  `}>
            <Col className="col-12 text-center">
              <img className={`${styles.Img}`} src="/assets/img/PortfolioPage/Component 1 – 2.png" alt={"IMG"}/>
            </Col>
          </Row>*/}
          <RowImg classImg={styles.Img} nameImg={"Component 1 – 2.png"}/>
          <Row  xl={6} className={` row justify-content-center `}>
            <Col xl={10} className={`col-auto ${styles.text}`} >
              <p >
                {tKey('Customer centricity is the ability to understand customers\' situations, perceptions, and expectations. Customer centricity demands that the customer is the focal point of all decisions related to delivering products, services and experiences to create customer satisfaction, loyalty and advocacy.')}
              </p>
            </Col>
          </Row>

          <Row  xl={6} className={` row justify-content-center ${styles.rowVid}`}>

            <Col xl={4} className={`col-auto ${styles.textVideo}`} >
              <p >

                {tKey('We in QUIAM Global adopt Customer Centricity as a cornerstone in defining our work philosophy, value proposition, business model, business processes, and our products/service design and delivery, as we insist that our work embarks on identification of (Business Analysis Value) that customers/clients are keen to achieve a shift, and there where we make the shift through our (Value-Triangle) and (Approach Hexagon), which are centered around our valued customers.')}
              </p>
            </Col>
            <Col xl={4} className={`col-auto `} >
              <video   className={`${styles.vidC}`} autoPlay={true}  loop={true} muted     >
                <source src='/assets/video/PortfolioPage/Comp 1.mp4'/>
              </video>
            </Col>
          </Row>



        </Container>
        <Row className={`justify-content-center   ${styles.topImg}`}>

        </Row>}
      </section>
  )
}

export default BannerCustomerCentricity