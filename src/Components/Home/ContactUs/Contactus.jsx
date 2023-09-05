import {Col, Container, Row} from "react-bootstrap";
/*import  contactUs from "/public/assets/img/contactusImg.png"*/
import styles from "./Contactus.module.css"
const Contactus =(props)=>{
    return(
        <section className={`  ${styles.contact} `} id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>

                                <div >
                                    <img src="/assets/img/contactusImg.png" alt="Contact"/>
                                </div>

                    </Col>
                    <Col md={6}>

                                <div >
                                    <h2 dir="rtl">تواصل معنا . .</h2>
                                    <form /*onSubmit={handlerSubmit}*/>
                                        <Row>
                                            <Col sm={6} className="px-1">
                                                <input type="text" /*value={formDetails.lastName}*/ placeholder="الكنية"
                                                       /*onChange={(event)=>onFormUpdate('lastName',event.target.value)}*//>
                                            </Col>
                                            <Col sm={6} className="px-1">
                                                <input type="text" /*value={formDetails.firstName}*/ placeholder="الاسم"
                                                       /*onChange={(event)=>onFormUpdate('firstName',event.target.value)}*//>
                                            </Col>
                                            <Col sm={6} className="px-1">
                                                <input type="email" /*value={formDetails.email}*/ placeholder="البريد الالكتروني"
                                                       /*onChange={(event)=>onFormUpdate('email',event.target.value)}*//>
                                            </Col>
                                            <Col sm={6} className="px-1">
                                                <input type="tel" /*value={formDetails.phone}*/ placeholder="رقم الهاتف"
                                                       /*onChange={(event)=>onFormUpdate('phone',event.target.value)}*//>
                                            </Col>

                                            <Col size={12} className="px-1"  >
                         <textarea  rows="6" /*value={formDetails.message}*/ placeholder=". . . الرسالة"
                                    /*onChange={(event)=>onFormUpdate('message',event.target.value)}*/>

                         </textarea>
                                                <button type="submit" ><span>ارسال</span></button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>

            {/*            </TrackVisibility>*/}
                    </Col>
                </Row>

            </Container>

        </section>
    )
}
export default Contactus