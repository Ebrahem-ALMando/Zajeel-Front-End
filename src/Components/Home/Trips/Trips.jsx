import React from 'react'

import {Col, Container, Row} from "react-bootstrap";
import styles from './Trips.module.css'

import CardTrips from "./Cards/CardTrips";
const Trips = () => {
  return (
      <section className={`${styles.TripsSec}`}>
        <Container className={``} dir="">
          <Row  xl={6} className={` row justify-content-center `}>
            <Col xl={8} className={`col-auto  `}>
              <h1 className={`${styles.textTrips}`} >
               الرحلات الأكثر شيوعاً
              </h1>

            </Col>
          </Row>
            <Row  xl={6} className={` row justify-content-center `}>
                <CardTrips
                    imageName={"trip_1.jpg"}
                    title={"من سرمدا الى ادلب"}
                    description={"يبدأ انطلاق الرحلات على هذا الخط من الساعة 7 صباحا وحتى 8 مساءً"}
                    price={'12 Tl'}

                />
                <CardTrips
                    imageName={"trip_2.jpg"}
                    title={"من سرمدا الى عزاز"}
                    description={"يبدأ انطلاق الرحلات على هذا الخط من الساعة 7 صباحا وحتى 8 مساءً"}
                    price={'50 Tl'}


                />
              <CardTrips
                  imageName={"trip_3.jpg"}
                    title={"من اطمة الى سرمدا"}
                    description={"يبدأ انطلاق الرحلات على هذا الخط من الساعة 7 صباحا وحتى 8 مساءً"}
                  price={'7 Tl'}
                />

            </Row>
        </Container>
      </section>
  )
}

export default Trips