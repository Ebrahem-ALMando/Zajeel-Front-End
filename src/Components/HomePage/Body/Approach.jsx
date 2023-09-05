import './Approach.css'
import {Col, Container, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
const Approach=()=>{
    const[tKey,i18n]=useTranslation();
    return(
        <section className="approach" id="home">
            <Container  dir="">
                <Row className="justify-content-center">
                    <Col xl={6} className="col-auto content-approach ">
                        <p  className="text--one">
                            {tKey('WITH THOUGHTFUL')}
                            </p>
                        <p  className="text-tow ">
                            {tKey('DEVELOPMENT & TRANSFORMATION')}

                        </p>
                        <p  className="text-three ">
                            {tKey('EVERYBODY WINS AND THRIVES')}

                        </p>
                        <p className="text--four" >
                            {tKey('WE INTRODUCE ORGANIZATIONAL DEVELOPMENT AND TRANSFORMATION (ODT) AS OUR GENUINE APPROACH TO ESTABLISHING AND MAINTAINING CHANGES THAT HELP YOU ACHIEVE MORE PRODUCTIVE AND SUSTAINABLE BUSINESS PERFORMANCE AND RESULTS')}

                        </p>
                        <button>
                            {tKey('SEE OUR APPROACH')}

                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export  default Approach;