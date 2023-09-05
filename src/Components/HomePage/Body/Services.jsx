
import { Container, Row} from "react-bootstrap";
import Card from "./Card";
import {Service} from "../Data/Service";
import {useTranslation} from "react-i18next";
const Services=()=>{

    const changeHover=()=>{

      /*  document.querySelector('.first').style.border='none';
        setTimeout(()=>{
            document.querySelector('.first').style.border=' 1px solid';
            document.querySelector('.first').style.borderImage='linear-gradient(to top,#ffffff, #9D20B1, #ffffff)1';
        },1000)*/
    }
    const [tKey,i18n]=useTranslation();




    const services= Service.map((serv)=>{
            return(
                <>
                    {i18n.language==="en"?
                        <Card key={serv.id} onHover={changeHover } class={serv.class} num={serv.num} title={serv.title}
                              description={serv.description}/>:
                        <Card key={serv.id} onHover={changeHover } class={serv.class} num={serv.num} title={serv.titleAR}
                              description={serv.descriptionAR}/>
                    }

                </>

            )
        })
    return(
        <section className="Service" id="home">
            <Container  dir="">
                <Row >
                    {services}
                </Row>
            </Container>
        </section>
    )
}

export  default Services;

