import styles from "./Header.module.css";
import {Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const Header=(props)=>{
    const[tKey,i18n]=useTranslation();
    return(
        <>
        <video className={styles.bgVid} autoPlay={true}  loop={true} muted     >
            <source src={`/assets/video/PortfolioPage/${props.nameVideo}`}/>

        </video>

    <Row  xl={6} className={` row justify-content-center  ${styles.rowHeader} `}>

        <Col xl={5} className={`col-auto   ${styles.headerImage}`}>
           {/*<p> <i  className={` ${styles.arrow} ${styles.down}`}></i></p>*/}
            <p className={`${props.classesText}`} >
                {tKey(props.text)}
            </p>
            <p className={`${props.classes}`} >
                {tKey(props.textContent)}
            </p>

        </Col>

    </Row>
    </>
    )
}
export default Header;