import {Col, Container, Row} from "react-bootstrap";
/*import  contactUs from "/public/assets/img/contactusImg.png"*/
import styles from "./Contactus.module.css"
import {useState} from "react";
import axios from "axios";
import {urlDomainApi} from "../../../URL_DomainApi";
import {toast} from "react-toastify";
const Contactus =(props)=>{
    const [name,setName]=useState('')
    const [lastName,setLastName]=useState('')
    const [emile,setEmile]=useState('')
    const [phone,setPhone]=useState('')
    const [message,setMessage]=useState('')


    const handelSetName=(e)=>setName(e.target.value)
    const handelSetLastName=(e)=>setLastName(e.target.value)
    const handelSetEmail=(e)=>setEmile(e.target.value)
    const handelSetPhone=(e)=>setPhone(e.target.value)
    const handelSetMessage=(e)=>setMessage(e.target.value)
    const handlerSubmit=(e)=>{
        e.preventDefault();
    }
    const sendData=async ()=>{

            if(validateInput()){
                //Submit Data
                await axios.post(`${urlDomainApi}/message`,{
                    name: name,
                    lastName:lastName,
                    email:emile,
                    phone: phone,
                    message:message,
                }).then((response)=>{
                    if(response.status===200){
                        toast.success("تم استلام رسالتك بنجاح . . سيتم التواصل معك قريبا");

                        clearData();
                    }else {
                        toast.error("حدث خطأ يرجى اعادة المحاولة");
                    }
                });
            }
            else {
                toast.error("يرجى ادخال جميع البيانات");
            }

    }
    const clearData=()=>{
        document.getElementById('name').value='';
        document.getElementById('lastName').value='';
        document.getElementById('email').value='';
        document.getElementById('phone').value='';
        document.getElementById('message').value='';
        setName('')
        setLastName('')
        setEmile('')
        setPhone('')
        setMessage('');

    }
    const validateInput=()=>{
    if(name===''||lastName===''||emile===''||phone===''||message===''){
        return false
    }else {
        if(emile.includes('@')&& emile.includes('.')){
            return  true
        }else {
            return  false
        }
    }
    }
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
                                    <form onSubmit={handlerSubmit}>
                                        <Row>
                                            <Col sm={6} className="px-1">
                                                <input id={'name'} type="text"  placeholder="الكنية"
                                                       onChange={handelSetLastName}
                                                />
                                            </Col>
                                            <Col sm={6} className="px-1">
                                                <input id={'lastName'} type="text"  placeholder="الاسم"
                                                       onChange={handelSetName}
                                                />
                                            </Col>
                                            <Col sm={6} className="px-1">
                                                <input id={'email'} type="email" placeholder="البريد الالكتروني"
                                                       onChange={handelSetEmail}

                                                />
                                            </Col>
                                            <Col sm={6} className="px-1">
                                                <input id={'phone'} type="tel"  placeholder="رقم الهاتف"
                                                       onChange={handelSetPhone}

                                                />
                                            </Col>

                                            <Col size={12} className="px-1"  >
                                                 <textarea id={'message'} rows="6" /*value={formDetails.message}*/ placeholder=". . . الرسالة"
                                                 onChange={handelSetMessage}
                                                 >
                                                 </textarea>
                                                <button  onClick={sendData} type="submit" ><span>ارسال</span></button>
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