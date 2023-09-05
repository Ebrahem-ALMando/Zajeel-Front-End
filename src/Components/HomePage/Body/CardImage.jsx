import './CardImage.css'
import {Col} from "react-bootstrap";
const CardImage=(props)=>{
    return(

        <Col className='CardImage'size={12} sm={6} md={4}>
            <img src={props.src} alt="photo"/>
            <div className="mt-4">
            </div>
        </Col>

    )
}
export default CardImage;