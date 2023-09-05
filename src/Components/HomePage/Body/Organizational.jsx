import {Col, Container, Row} from "react-bootstrap";
import  './Organizational.css'
import { useTranslation } from 'react-i18next';
const Organizational=()=> {
    const[tKey,i18n]=useTranslation();
    return (
        <section className="organizational" id="organizational">
            <Container dir="">
                <Row className="justify-content-center">
                    <Col xl={4} className="col-auto  content-organizational">
                        <p className="text-join">
                            {tKey('JOIN OUR HEXA-STAGES')}
                            </p>
                        <p className="fw-bold text-organizational " >{tKey('ORGANIZATIONAL')}</p>
                        <p className="description">
                            {tKey('DEVELOPMENT & TRANSFORMATION (ODT) JOURNEY SO WE CAN RETHINK YOUR REQUIREMENTS, ASPIRATIONS AND WAYS OF DOING, AND TAKE YOUR BUSINESS TO NEW FUTURISTIC LEVELS')}
                        </p>
                        {/*<p style={{color: "#9D20B1", top: "620px"}}>*/}
                        {/*    PRESENT AND FUTURE*/}
                        {/*</p>*/}
                    </Col>
                 {/*   <div className="content-organizational">

                    </div>*/}
                </Row>
            </Container>
        </section>
    );
}
export  default  Organizational;