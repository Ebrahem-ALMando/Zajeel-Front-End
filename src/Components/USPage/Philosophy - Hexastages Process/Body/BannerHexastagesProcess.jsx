import React from "react";
import styles from "./BannerHexastagesProcess.module.css";
import Header from "../../Header/Header";
import CardRightV from "../../Expertise – What We Promise You/Body/CardRightV";
import CardLeftV from "../../Expertise – What We Promise You/Body/CardLeftV";
import stylesBPV from "../../Philosophy -Value-Triangle/Body/BannerPhilosophyValueTriangle.module.css";
import RowText from "../../Philosophy -Value-Triangle/Body/RowText";
const BannerHexastagesProcess = () => {
  return (
      <section className={`container-fluid ${styles.PromiseYou}` }>
        <Header
            classesText={styles.classesTextHeader}
            text="Approach Hexagon"
            nameVideo={'HeaderPhilosophu.mp4'}/>/
            <RowText  xl={6} classesCol={stylesBPV.text} classes={styles.rowHeader}
                      bgColor={stylesBPV.colorL}
                      isImage={true}   nameImg={"Approach Hexagon.png"}
                      classesImg={styles.imgApproach}
                      text={"We Envision Our Approach To Make The Shift With You Through A Hexa-Stage Process That Goes Through The Following:"}/>
          <CardLeftV
              classtextContent={styles.textContent}
              classImg={styles.img}
              nameImg={"Approach Hexagon_1.png"}
              title={"Discovery"}
              text={"Embark on a comprehensive understanding of your business; as we analyze the needs, drivers, objectives, and context to identify bottlenecks, pain points, and inefficiencies."}
          />
        <CardRightV

            classtextContent={styles.textContentRight}
            classImg={styles.img}
            nameImg={"Approach Hexagon_2.png"}
            title={"Design"}
            text={"Receive a comprehensive and operational blueprint of organizational development and transformation (ODT), as we design it as an asset that your organization uses to align teams, processes, data, and work environment to strategically develop and transform."}
        />

          <CardLeftV
              classtextContent={styles.textContent}
              classImg={styles.img}
              nameImg={"Approach Hexagon_3.png"}
              title={"Development"}
              text={"Obtain a closely collaborating team as we work on the development of solutions and relevant assets that address identified problems and aspired results."}
          />
          <CardRightV

              classtextContent={styles.textContentRight}
              classImg={styles.img}
              nameImg={"Approach Hexagon_4.png"}
              title={"Deployment"}
              text={"Observe closely the roll-out and deployment of the solution into your organization’s teams, processes, and work environment, as we deliver clear deliverables following a defined timeline, controls, and measures."}
          />
          <CardLeftV
              classtextContent={styles.textContent}
              classImg={styles.img}
              nameImg={"Approach Hexagon_5.png"}
              title={"Transformation"}
              text={"Experience the transformation of your organization’s teams, processes, and work environment into a productive and sustainable change, as we continuously monitor change conditions and environment, and mentor change agents and catalysts."}
          />
          <CardRightV

              classtextContent={styles.textContentRight}
              classImg={styles.img}
              nameImg={"Approach Hexagon_6.png"}
              title={"Shift"}
              text={"Feel & measure a shift in business performance, results, and thinking as transformation change fulfills its extent."}
          />

      </section>
    )
};

export default BannerHexastagesProcess;
