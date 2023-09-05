import {Card, Col} from "react-bootstrap";
import styles from "./CardCA.module.css";

import {useTranslation} from "react-i18next";

const CardCA=(props)=>{
    const[tKey,i18n]=useTranslation();
    return(
        <Col xl={3} className={`col-auto m-4 `} >
            <Card className={`${styles.card}`} >
                <Card.Header className={`${styles.cardHeader}`}>
                    <img className={`${styles.cardImg}`}
                         src={`/assets/img/PortfolioPage/${props.nameImg}`} alt={"IMG"}/>
                </Card.Header>
                <Card.Body className={`${styles.cardBody}`}>
                    <Card.Title className={`${styles.textTitle}`}>
                        {tKey(props.textTitle)}
                        <h5 className={`${styles.titleContaint}`}>
                            {tKey(props.textTitleContent)}
                        </h5>
                    </Card.Title>
                    <Card.Text className={`${styles.cardText}`}>
                        {tKey(props.textBody)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default CardCA