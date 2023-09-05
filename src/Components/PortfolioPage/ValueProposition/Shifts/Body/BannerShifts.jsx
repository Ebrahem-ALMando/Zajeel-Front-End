import React from 'react'
import Header from "../../../Header/Header";
import stylesSTR from "../../StrategySystems/Body/BannerStrategySystems.module.css";
import {Col, Container, Row} from "react-bootstrap";
import styles from "./BannerShifts.module.css"
import RowText from "../../StrategySystems/Body/RowText";
import RowImg from "../../../RowImg";
import {useTranslation} from "react-i18next";
import RowImgText from "./RowImgText";
import CardLeftV from "../../../../USPage/Expertise – What We Promise You/Body/CardLeftV";
import CardRightV from "../../../../USPage/Expertise – What We Promise You/Body/CardRightV";
const BannerShifts = () => {
    const[tKey,i18n]=useTranslation();
  return (
      <section >
        <Container className={''} dir="">
          <Header text="PORTFOLIO "
                  classesText={`${stylesSTR.textHeader}`}
                  classes={`${stylesSTR.textHeaderChild}  ${styles.textHeaderChild}`}
                  textContent="SHIFTS" nameVideo={'Header.m4v'}/>
            <RowText
                classes={styles.textHeader}

                textOne={"Our philosophy and business model are centered around making a SHIFT for our clients, that can be identified, monitored, measured, and then utilized in their business needs."}
            />
            <RowImg classImg={styles.Img} nameImg={"Shifts_1.png"}/>
            <RowText
                classText={styles.text}
                textOne={"This shift can take different forms, not exclusive to financial growth (which is a combined outcome of whole-business performance), but shifts can happen in different perspectives :"}
            />


            <RowImgText
                xl={5}
                classes={styles.rowImgText}
                text={"Shifts in (Learning and Growth) of teams and organization"}
                textTow={"Shifts in (Finances) of the organization"}
            />
            <RowImgText
                xl={5}
                classes={styles.rowImgText}
                text={"Shifts in (Internal Processes) of the organization"}
                textTow={"Shifts in (Society and Stakeholders) of the organization"}
            />
            <RowImgText
                xl={10}
                classes={styles.rowImgText}
                text={"Shifts in (Customers/Clients) both internal and external"}

            />
            <RowText
                classText={styles.textMeasuring}
                textOne={"Measuring the shifts can take quantitative and/or qualitative methodologies"}
            />
            <CardLeftV
                isPortfolio={true}
                src={"/assets/img/PortfolioPage/"}
                classRow={styles.cardL}
                classtextContent={styles.textContent}
                classImg={styles.imgCard}
                classTitle={styles.titleCard}
                nameImg={"ShiftsCard_1.png"}
                title={"Key Indicators (KIs)"}
                text={"as shift can be measured by achieving a desired result(s) in key performance indicators (KPIs), key risk indicators (KRIs), or key compliance indicators (KCIs)"}
            />
          <CardRightV
              isPortfolio={true}
              src={"/assets/img/PortfolioPage/"}
              classRow={styles.cardR}
              classtextContent={styles.textContent}
              classImg={styles.imgCard}
              classTitle={styles.titleCard}
              nameImg={"ShiftsCard_2.png"}
              title={"Advancement of Levels"}
              text={"shifts can be measured according to (maturity in organizational capability) or (mastery in personal capacity)"}
          />
          <CardLeftV
              isPortfolio={true}
              src={"/assets/img/PortfolioPage/"}
              classRow={styles.cardL}
              classtextContent={styles.textContent}
              classImg={styles.imgCard}
              classTitle={styles.titleCard}
              nameImg={"ShiftsCard_3.png"}
              title={"Perspectives Changes"}
              text={"as shifts can happen towards a specific topic (e.g., business philosophy or model, new work methodologies/processes/tools, internal or external cases and concerns, future visions and insights), through measuring the shifts in values, attitudes, behaviors, and perceptions on different levels (personal / team / organizational)"}
          />
        </Container>
    {/*    <video id="vidioB" className={` ${styles.vidioBody}   `}

               autoPlay={true}  loop={true}   muted   >
          <source src="/assets/video/PortfolioPage/Paralax.m4v"/>
        </video>*/}
      </section>
  )
}

export default BannerShifts