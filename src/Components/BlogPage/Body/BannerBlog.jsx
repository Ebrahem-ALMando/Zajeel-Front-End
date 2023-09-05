import React from 'react'
import Header from "./../Header/Header";
import stylesSTR from "../../PortfolioPage/ValueProposition/StrategySystems/Body/BannerStrategySystems.module.css";
import styles from "../../YouPage/You.module.css";
import {Container} from "react-bootstrap";
import RowImg from "./../RowImg"
import stylesP from "./../../PortfolioPage/Customer Centricity/Body/BannerCustomerCentricity.module.css"
const BannerBlog = () => {
  return (
      <section >
        <Container className={''} dir="">
          <Header text="BLOG "
                  classesText={`${stylesSTR.textHeader} ${styles.TitleHeader}`}
                  classes={stylesSTR.textHeaderChild}
                  nameVideo={'Header.mp4'}/>
            <RowImg classImg={stylesP.Img} nameImg={"mainBlog.png"}/>
        </Container>
      </section>
  )
}

export default BannerBlog