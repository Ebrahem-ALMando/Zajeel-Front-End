import React from 'react'
import Header from "../../../Header/Header";
import stylesSTR from "../../StrategySystems/Body/BannerStrategySystems.module.css";
import {Container} from "react-bootstrap";
import RowImg from "../../../RowImg";
import styles from "./BannerOrganizationalTransformation.module.css";
import RowText from "../../StrategySystems/Body/RowText";

const BannerOrganizationalTransformation = () => {
  return (
      <section >
        <Container className={''} dir="">
          <Header text="PORTFOLIO "
                  classesText={stylesSTR.textHeader}
                  classes={`${stylesSTR.textHeaderChild} ${styles.textHeaderChild}`}
                  textContent="Organizational Transformation" nameVideo={'Header.m4v'}/>
            <RowImg classImg={styles.Img} nameImg={"Organizational Transformation_1.png"}/>
            <RowText
                textOne={"Organizational transformation management has become an inevitable priority and challenge, both on present and future perspectives, considering digitalization, technological, and business (on the levels of domain, locations, and modality) transformations."}
            />
            <RowText
                textOne={"Our insight in QUAIM that perceiving transformation as"}
            />
            <RowImg classImg={styles.ImgTow} nameImg={"ComponentORT_1.png"}/>
            <RowText
                textOne={" together form keys to success for an effective and sustainable organizational transformation. "}
            />
            <RowImg classImg={styles.ImgThree} nameImg={"Organizational Transformation_2.png"}/>
            <RowText
                textOne={"We in QUAIM provide you an assessment of transformation context and requirements, and a roadmap for transformation alternatives, stages, components, tools, and criteria. In addition to surveillance of transformation evolving impacts, requirements, and risks, under deep understanding of interference and overlap between business strategic and operational cycles."}
            />
            <RowText
                textOne={"QUAIM is keen that your organizational stay competent and ahead of the game for requirements of present and future, and make the shifts for your clients, teams, and societies."}
            />
        </Container>
      </section>
  )
}

export default BannerOrganizationalTransformation