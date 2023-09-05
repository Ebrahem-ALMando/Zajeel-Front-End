import {useEffect,useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import './Grow.css'
import {useTranslation} from "react-i18next";
// import imgGrow from '/assets/img/HomePage/Layer%205.png'



const Grow=()=>{
    const[tKey,i18n]=useTranslation();
    return(
        <>
        <section className="grow" id="grow">
            <Container  dir="">
                <Row className="justify-content-center">
                    <Col xl={4} className="col-auto  content-grow">
                    <div className="content-grow ">
                        <img src={'assets/img/HomePage/Layer%205.png'} alt="#"/>
                        <p  className="text-one" >{tKey('MAKE SHIFTS THAT LAST AND REFLECT')}</p>
                        <p className="text-tow" style={{ color: "#2AA7A7"}}>
                            {tKey('NOT JUST A SWIFT EFFECT')}
                        </p>
                        <p className="text-three " >
                            {tKey('INSTEAD OF INVESTING YOUR RESOURCES ON LOCALIZED DEVELOPMENT AND TRANSFORMATION TASKS, OUR EXPERTISE IN QUAIM GIVES YOU THE POWER TO LEAD AND PERFORM, AND MORE FOCUS ON STRATEGICALLY LINKING BUSINESS TO MANAGEMENT TO CAPABILITIES WITHIN YOUR ORGANIZATION.')}
                        </p>
                    </div>
                    </Col>
                </Row>
                <Row className="justify-content-center content-grow-section-tow">
                    <Col xl={4} className="col">

                        <video className="video-section-tow" autoPlay={true}  loop={true} muted     >
                            <source src='/assets/video/HomePage/HexaHome.mp4'/>
                        </video>

                    </Col>
                    <Col xl={6} className="col">
                        <p  className="text-one" >{tKey('YOUR END-TO-END')}</p>
                        <p className="text-tow" style={{ color: "#2AA7A7"}}>
                            {tKey('ORGANIZATIONAL DEVELOPMENT & TRANSFORMATION STARTS HERE')}
                        </p>
                        <p className="text-three" >
                            {tKey('EXPLORE HOW OUR HEXA-STAGES ODT JOURNEY CAN UNIFY YOUR PEOPLE, PROCESSES, RESOURCES, AND ENVIRONMENT AROUND A CENTRALIZED FOCUSED BUSINESS PERFORMANCE STRATEGY')}
                         </p>
                        <button>
                            {tKey('HOW IT WORKS')}
                        </button>

                    </Col>

                </Row>

            </Container>

        </section>
            <section className="growImage" id="grow">
            </section>
            </>
    )
}

export  default Grow;

