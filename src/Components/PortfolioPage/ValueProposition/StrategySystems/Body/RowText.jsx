import {Col, Row} from "react-bootstrap";
import styles from "./BannerStrategySystems.module.css";
import {useTranslation} from "react-i18next";


const RowText=(props)=>{
    const[tKey,i18n]=useTranslation();
    return(
        <Row  xl={6} className={` row justify-content-center ${props.classes}`}>
            <Col xl={10} className={`col-auto ${styles.text}`} >
                <p className={props.classText} >
                    {tKey(props.textOne)}
                    <span className={styles.textColor}>
                 {tKey(props.textOneSpan)}
             </span>
                    {tKey(props.textTow)}
                    <span className={styles.textColor}>
                    {tKey(props.textTowSpan)}
                </span>
                    {tKey(props.textThree)}
                </p>
            </Col>
        </Row>
    )
}
export default RowText