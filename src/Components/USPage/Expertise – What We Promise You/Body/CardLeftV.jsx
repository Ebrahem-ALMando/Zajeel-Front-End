import {Col, Row} from "react-bootstrap";
import styles from "./BannerExpertisePromiseYou.module.css";
import {useTranslation} from "react-i18next";

const CardLeftV=(props)=>{
    const[tKey,i18n]=useTranslation();
    return(
        <Row  xl={6} className={`justify-content-center row  ${props.isPortfolio?props.classRow:styles.cardL} `}>
            <Col xl={2} className={`col-auto ${props.classImg?? styles.img}`} >
                <img  src={`${props.isPortfolio?props.src:`/assets/img/UsPage/`}${props.nameImg}`}   alt={"#Img"} />
            </Col>
            <Col xl={7} className={`col-xl-7 col-md-7 col-xxl-7  col-auto  ${props.classtextContent??styles.textContent}`} >
                {props.title?
                    <h3 className={props.classTitle}>
                        {tKey(props.title)}
                    </h3>
                    :null}
                <p >
                    {tKey(props.text)}
                </p>
            </Col>
        </Row>
    )
}
export default CardLeftV;