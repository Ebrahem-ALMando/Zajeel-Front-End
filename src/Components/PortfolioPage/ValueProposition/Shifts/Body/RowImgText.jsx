import {Col, Row} from "react-bootstrap";
import styles from "./BannerShifts.module.css"
import {useTranslation} from "react-i18next";
const RowImgText=(props)=>{
    const[tKey,i18n]=useTranslation();
    return(
        <Row xl={6} className={` row  row-sm-12 ${props.classes} `}>
            <Col xl={props.xl} className={`col-auto col-sm-6`}>
                <p className={styles.textBody}>
                    <img
                        className={`${styles.img} ` }
                        src={`/assets/img/PortfolioPage/CheckShifts.png`}
                        alt={"Img"}
                    />
                    {tKey(props.text)}</p>

            </Col>
            {props.textTow?
                <Col xl={props.xl} className={`col-auto col-sm-6 `}>

                    <p className={styles.textBody}>
                        <img
                            className={`${styles.img} ` }
                            src={`/assets/img/PortfolioPage/CheckShifts.png`}
                            alt={"Img"}
                        />
                        {tKey(props.textTow)}</p>
                </Col>:null}

        </Row>
    )
}
export default RowImgText