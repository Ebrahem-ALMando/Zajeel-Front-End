import {Col, Row} from "react-bootstrap";


const RowImg=(props)=>{
    return(
        <Row  xl={12} className={` row justify-content-center  `}>
            <Col className="col-12 text-center">
                <img className={`${props.classImg}`} src={`/assets/img/PortfolioPage/${props.nameImg}`} alt={"IMG"}/>
            </Col>
        </Row>
    )
}
export default RowImg