import React from 'react'
import styles from './Header.module.css'
import {useTranslation} from "react-i18next";
import {Col, Row} from "react-bootstrap";
const Header = (props) => {
    const[tKey,i18n]=useTranslation();
    return(
        <>
            <video className={styles.bgVid} autoPlay={true}  loop={true} muted     >
                <source src={`/assets/video/BlogPage/${props.nameVideo}`}/>

            </video>

            <Row  xl={6} className={` row justify-content-center  ${styles.rowHeader} `}>

                <Col xl={5} className={`col-auto`}>
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

export default Header