import {Col, Container, Row} from "react-bootstrap";
import './BannerHome.css'
import { useTranslation } from 'react-i18next';
/*import  bgHeader from '../../../public/assets/video/Header.mp4'*/
const BannerHome=()=>{
    const[tKey,i18n]=useTranslation();
    return(
        <section className="banner" id="home">
            <Container className="" dir="">
                <video className="bgVid" autoPlay={true}  loop={true} muted     >
                    <source src='/assets/video/HomePage/Header.mp4'/>
                </video>
                <Row  xl={6} className="  justify-content-center home">
                    <Col xl={4} className="col-auto ">

                        <div className="content-home  ">
                            <p className="pt-5" >

                                {tKey('WE TRANSFORM YOUR')}
                            </p>
                            <p  style={{ color: "#9D20B1", top: "620px" }}>
                                {tKey('PRESENT AND FUTURE')}

                            </p>
                            <svg className="line" xmlns="http://www.w3.org/2000/svg" width="300" height="20" viewBox="0 0 219 3">
                                <line id="Line_1" data-name="Line 1" x2="216" transform="translate(1.5 1.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                            </svg>
                            <p className="text-four" >
                                {tKey('TO A SEAMLESS CUSTOMER EXPERIENCE THAT EASILY CONVERTS')}

                            </p>
                        </div>




                    </Col>
                </Row>
                            {/*<Row className="h-75 ">*/}
                            {/*    /!*<div className="content ">*!/*/}
                            {/*    /!*    <p  >*!/*/}

                            {/*    /!*        {tKey('WE TRANSFORM YOUR')}*!/*/}
                            {/*    /!*       </p>*!/*/}
                            {/*    /!*    <p  style={{ color: "#9D20B1", top: "620px" }}>*!/*/}
                            {/*    /!*        {tKey('PRESENT AND FUTURE')}*!/*/}

                            {/*    /!*    </p>*!/*/}
                            {/*    /!*    <svg className="line" xmlns="http://www.w3.org/2000/svg" width="219" height="3" viewBox="0 0 219 3">*!/*/}
                            {/*    /!*        <line id="Line_1" data-name="Line 1" x2="216" transform="translate(1.5 1.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>*!/*/}
                            {/*    /!*    </svg>*!/*/}
                            {/*    /!*    <p className="text-four" >*!/*/}
                            {/*    /!*        {tKey('TO A SEAMLESS CUSTOMER EXPERIENCE THAT EASILY CONVERTS')}*!/*/}

                            {/*    /!*    </p>*!/*/}
                            {/*    /!*</div>*!/*/}


                            {/*</Row>*/}

            </Container>
        </section>
    )
}
export  default BannerHome;

