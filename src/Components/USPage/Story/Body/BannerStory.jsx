import {Col, Container, Row} from "react-bootstrap";
import styles from './BannerStory.module.css'
import {useTranslation} from "react-i18next";
import Header from "../../Header/Header";
import {Link} from "react-router-dom";
const BannerStory=()=>{
    const[tKey,i18n]=useTranslation();
    return(

            <section >
                <Container className={''} dir="">
                    <Header text="OUR STORY" nameVideo={'Header.mp4'}/>/
                    <Row  xl={6} className={` row justify-content-center ${styles.rowheader}`}>
                        <Col xl={10} className={`col-auto ${styles.textHeader}`} >
                            <p >
                                {tKey('ON the verge of transitioning between the 3rd and 4th industrial revolutions, we have entered the market, and have witnessed a massive volume of companies and organizations demanding solutions in the development of business and teams\' capability in competition over access to resources, and achievement of results.')}
                            </p>
                        </Col>
                    </Row>


                    <Row  xl={6} className={` row justify-content-center ${styles.rowImage}`}>
                        <Col xl={4} className={`col-auto `} >
                            <video   className={`${styles.vid15}`} autoPlay={true}  loop={true} muted     >
                                <source src='/assets/video/USPage/15.mp4'/>
                            </video>
                        </Col>
                        <Col xl={4} className={`col-auto ${styles.textHeaderTow}`} >
                            <p >

                                {tKey('FOR over 15 years of expertise accumulation, in co-working periods that have crossed multiple times, we noticed that clients suffer to acquire solutions’ consultancies that are capable to create an impactful business value for them, as solutions are often local, temporal, and isolated off the overall business system.')}
                                                             </p>
                        </Col>
                    </Row>

                </Container>

                <div   className={`d-flex  flex-lg-column flex-wrap`}>
                        <button className={`m-auto ${styles.btnReq}`} >
                            {tKey('Register your request')}
                        </button>
                    <section className={` ${styles.rowbackground}`}>
                    </section>
                </div>

            </section>


    );
}
export  default BannerStory