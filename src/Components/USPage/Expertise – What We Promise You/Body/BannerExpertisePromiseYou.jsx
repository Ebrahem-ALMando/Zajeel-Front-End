import {Col, Container, Row} from "react-bootstrap";
import Header from "../../Header/Header";
import styles from "../../Expertise – What We Promise You/Body/BannerExpertisePromiseYou.module.css";
import {useTranslation} from "react-i18next";
import CardLeftV from "./CardLeftV";
import CardRightV from "./CardRightV";

const   BannerExpertisePromiseYou=()=>{
    const[tKey,i18n]=useTranslation();
    return(
        <section className={`container-fluid ${styles.PromiseYou}` }>
                <Header
                    classes={styles.textContentHeader}
                    text="Expertise" textContent="What We Promise You?"
                    nameVideo={'Header.mp4'}/>/
            <CardRightV
                nameImg={"Promise You_1.png"}
                text={"We deliver a unique knowledge experience, You will grasp the difference on all levels as individuals, teams, and organization."}
            />
            <CardLeftV
                nameImg={"Promise You_2.png"}
            text={"We provide You with the best we master, and we expand our proposed value with our strategic partners, all unified into a quality framework of QUAIM that creates difference."}
            />
            <CardRightV
                nameImg={"Promise You_3.png"}
                text={"You will not wait till the end to preview the product, as We will keep You acquainted with interim product(s) and process progress evolutions, and You will continually provide your valuable inputs and perceptions."}
            />
            <CardLeftV
                nameImg={"Promise You_4.png"}
                text={"We and You will start and build on the (Business Analysis Value) that We aim to improve, and We conclude by measuring the impact and shift on the very (Business Analysis Value) We started from."}
            />
            <CardRightV
                nameImg={"Promise You_5.png"}
                text={"Your knowledge capital and transformational capabilities will grow upon each experience with Us."}
            />
            <CardLeftV
                nameImg={"Promise You_6.png"}
                text={"Our capabilities, knowledge, and expertise in QUAIM are put in place to serve our clients in making SHIFTS in their businesses, environments, and societies."}
            />

        </section>
    )
}
export default BannerExpertisePromiseYou;