import {Col, Container, Row} from "react-bootstrap";
import Header from "../../Header/Header";
import styles from "../../Philosophy -Value-Triangle/Body/BannerPhilosophyValueTriangle.module.css";

import RowText from "./RowText";


const BannerPhilosophyValueTriangle=()=>{

    return(
        <section >
            <Container className={''} dir="">
                <Header text="Value Triangle"
                        nameVideo={'HeaderPhilosophu.mp4'}/>/


                <Row  xl={12} className={` row justify-content-center  ${styles.products} `}>
                    <Col className="col-12  text-center">
                        <img className={`${styles.Img}`} src="/assets/img/UsPage/products & services.png"/>
                    </Col>
                </Row>
            </Container>
                <RowText  xl={8} classesCol={styles.text} classes={styles.rowHeader}
                          bgColor={styles.colorD}
                          isImage={true}   nameImg={"Triangle_1.png"}
                          classesImg={styles.Img}
                          text={"In a volatile, uncertain, complex, and ambiguous (VUCA) world, the challenges of clients to define, apply, and reap the success of business consultancies are constantly increasing; as from client’s perspective, the biggest pains are that those consultancies are:"}/>


            <RowText  xl={5} classesCol={styles.text} classes={styles.rowHeader}
                      bgColor={styles.colorL}
                      isImage={true}   nameImg={"Triangle_2.png"}
                      classesImg={styles.Img}
                      text={"While their most aspired gains from consultancies,are summarized in:"}/>

            <RowText  xl={9} classesCol={styles.text} classes={styles.rowHeader}
                      bgColor={styles.colorD}
                      isImage={true} nameImg={"Triangle_3.png"}
                      classesImg={styles.Img}
                      text={"From the aforementioned client perspective, we in QUAIM Global have designed our value proposition, to serve our clients with organizational development and transformation (ODT) consultancy products and services, that resemble (Pain Relievers) by:"}/>

            <RowText  xl={9} classesCol={styles.text} classes={styles.rowHeader}
                      bgColor={styles.colorL}
                      isImage={true} nameImg={"Triangle_4.png"}
                      classesImg={styles.Img}
                      text={"Also, our (ODT) products and services serve as (Gain Creators) by :"}/>
            <RowText  xl={9} classesCol={styles.text} classes={styles.rowFooter}
                      bgColor={styles.colorD}
                      isImage={true} nameImg={"Triangle_5.png"}
                      classesImg={styles.Img}
                      text={"We have formed our Value-Triangle to address the following three disciplines :"}
                      classesText_2={styles.footerText}
                      text_2={"As we believe each healthy consultancy must start by understanding the client’s business model, system, and environment, and consequently derive both business drivers and results deemed by clients behind the consultancy forming a (Business Analysis Value), having this value in mind, work on management systems, culture and tools is the next stop to form a framework of thinking to fulfill the business analysis value. Finally, translating those management systems into institutional, knowledge and transformative practices and capabilities is what brings the business analysis value into everyday life and into making a shift in the business; and that’s how we integrate those three dimensions to deliver the highest value to our clients."}
            />
        </section>
    )
}
export default BannerPhilosophyValueTriangle