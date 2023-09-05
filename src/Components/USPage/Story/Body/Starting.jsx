import {Col, Container, Row} from "react-bootstrap";
import styles from "./Starting.module.css";
import {useTranslation} from "react-i18next";

const Starting=()=>{
    const[tKey,i18n]=useTranslation();
    return(
        <section className={`${styles.StartingSec}`}>
            <Container className={``} dir="">

                <Row  xl={6} className={` row justify-content-center `}>
                    <Col xl={8} className={`col-auto  `}>
                        <h1 className={`${styles.textStarting}`} >

                            {tKey('STARTING')}
                        </h1>
                        <p className={`${styles.textStartContaint}`}>

                            {tKey('from this perspective, we have convened on 12/12/2021 to establish QUAIM Global as a company that defines its value by')}
                        </p>
                    </Col>
                </Row>
                <Row  xl={12} className={`text-center justify-content-around  align-items-center  row w-100 ${styles.rowImgText}`}>




                        <Col xl={3} className={`  col ${styles.text} `}>

                            <p className={``}>

                                {tKey('Futuristic Vision')}
                            </p>
                        </Col>
                        <Col xl={3} className={`col ${styles.text} `}>

                            <p className={``}>

                                {tKey('Business Impact')}
                            </p>
                        </Col>
                        <Col xl={3} className={`col ${styles.text} `}>

                            <p className={``}>

                                {tKey('Results Achievement')}
                            </p>
                        </Col>




                </Row>
                <Row  xl={6} className={` row justify-content-center `}>
                    <Col xl={10} className={`col-auto ${styles.txFoterstr}`} >
                        <p >

                            {tKey('WE combined our diversified backgrounds and expertise in (business analysis and development, quality and process improvement, teams’ management from strategy to projects levels, and development of technical solutions) all together into QUAIM Global to create a unique value that focuses on (Making a Shift for Clients, Teams, and Consultants)')}
                                                   </p>
                    </Col>

                </Row>

            </Container>


        </section>
       )
}
export default Starting;