import {Col, Container, Row} from "react-bootstrap";
import Header from "../../Header/Header";
import styles from "../../Expertise – Why QUAIM/Body/BannerExpertiseWhyQuaim.module.css";
import {useTranslation} from "react-i18next";

const BannerExpertiseWhyQuaim=()=>{
    const[tKey,i18n]=useTranslation();
    return(
        <section >
            <Container className={''} dir="">
                <Header text="Expertise" textContent="Why QUAIM?" nameVideo={'Header.mp4'}/>/

                <Row  xl={6} className={` row justify-content-center ${styles.rowheader}`}>
                    <Col xl={10} className={`col-auto ${styles.textHeader}`} >
                        <p >
                            {tKey('The diversified experience, technically in management, quality, and software/information systems engineering, and aligned methodologically in organizational development and transformation.')}
                        </p>
                    </Col>
                </Row>

                <Row  xl={12} className={` row justify-content-center  `}>
                    <Col className="col-12 text-center">
                        <img className={`${styles.Img}`} src="/assets/img/UsPage/Why QUAIM.png"/>
                    </Col>
                </Row>

                <Row  xl={6} className={` row  justify-content-center   ${styles.rowFotter}`}>
                    <Col xl={10} className={`col-auto    ${styles.textHeader}`} >
                        <p >
                            {tKey('The practical Applied experience in leadership management positions in multiple companies and organizations, and consultative roles for many organizations, in many countries')}
                        </p>
                    </Col>
                    <Col xl={10} className={`col-auto mt-1  ${styles.textHeader}`} >
                        <p >
                            {tKey('Harnessing the globally successful standards and practices in improving non-traditional contexts Application of approaches, channels, and tools that embrace (Customer Centricity)')}
                        </p>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}
export default BannerExpertiseWhyQuaim;