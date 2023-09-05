import styles from "../Story/Body/BannerStory.module.css";
import {Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const Header=(props)=>{
    const[tKey,i18n]=useTranslation();
    return(
        <>
        <video className={styles.bgVid} autoPlay={true}  loop={true} muted     >
            <source src={`/assets/video/USPage/${props.nameVideo}`}/>
        </video>
     <Row  xl={6} className={` row justify-content-center  ${styles.ourStory} `}>

        <Col xl={2} className={`col-auto  ${styles.contentStory}`}>
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