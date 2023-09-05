import './Clients.css'
import {Col, Container, Row} from "react-bootstrap";
import CardImage from "./CardImage";
import {clients} from "../Data/Clients";
import {useTranslation} from "react-i18next";
const Clients=()=>{
    const Clients=clients.map((cli)=>{
            return(
                <CardImage key={cli.id} src={cli.src}/>)
    })
    const[tKey,i18n]=useTranslation();
    return(
        <section className="clients" >
            <Container  dir="">
                <Row  className="justify-content-center">
                    <Col xl={5} className="col-auto content-client ">
                        <p  className="text-one">
                            {tKey('OUR HAPPY CLIENTS')}
                            </p>
                        <p className="text-tow" >
                            {tKey('FROM SMALL-MEDIUM ENTERPRISES AND ORGANIZATIONS (SMES) TO LARGE SCALE OPERATIONS, WE PROVIDE OUR SERVICES TO ORGANIZATIONS AT ALL STAGES OF DEVELOPMENT SCALE OVER THE WORLD TO COME UP WITH THE BOLD IDEAS AND BRING THEM TO LIFE.')}
                              </p>
                    </Col>

                </Row>
                <Row className="justify-content-center  Clients">
                   {/*<Col  className="colm">*/}
                       {Clients}
                   {/*</Col>*/}
                </Row>
                <Row className="justify-content-center content-clients ">
                    <Col xl={5} className="col-auto content-clients-text">
                    {/*<div className="content-clients ">*/}
                        <p  className="text-one">
                            {tKey('YOUR END TO END')}
                            </p>
                        <p className="text-tow" >
                            {tKey('ORGANIZATIONAL DEVELOPMENT & TRANSFORMATION (ODT) STARTS HERE')}

                        </p>

                        <button>
                            {tKey('REGISTER YOUR REQUEST')}
                        </button>
                    </Col>
                    <Col xl={4} className="col-auto">
                        <img src="/assets/img/HomePage/Clients/Vector Smart Object copy 6.png" alt="photo"/>
                    </Col>
                    {/*</div>*/}

                </Row>


            </Container>
        </section>
    )
}
export  default Clients;