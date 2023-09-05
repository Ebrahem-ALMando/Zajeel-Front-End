import Carousel from 'react-bootstrap/Carousel';
import styles from "./Slider.module.css"
import "./arrow.css"
function Slider() {
    return (
        <Carousel data-bs-theme="dark" className={styles.slider} >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/assets/img/Home/slider_1.jpg"
                    alt="Second slide"
                />
                <div className={styles.text}>
                    <h1>عشرة اعوام على الثورة السورية</h1>
                    <p>مشاركة كادر زاجل في العرس الثوري</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src="/assets/img/Home/slider_1.jpg"
                    alt="Second slide"
                />
              <div className={styles.text}>
                    <h1>عشرة اعوام على الثورة السورية</h1>
                    <p>مشاركة كادر زاجل في العرس الثوري</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/assets/img/Home/slider_1.jpg"
                    alt="Second slide"
                />
                <div className={styles.text}>
                    <h1>عشرة اعوام على الثورة السورية</h1>
                    <p>مشاركة كادر زاجل في العرس الثوري</p>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;