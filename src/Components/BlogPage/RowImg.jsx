import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const RowImg=(props)=>{
    return(
        <Row  xl={12} className={` row  justify-content-center  `}>
            <Col className="col-12 text-center">
                <Link
                    className="text-decoration-none m-auto  link-light " to={"/blog-page"}
                >
                <img className={`w-100 ${props.classImg}`} src={`/assets/img/BlogPage/${props.nameImg}`} alt={"IMG"}/>
                </Link>
            </Col>
        </Row>
    )
}
export default RowImg