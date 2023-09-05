import './Card.css'
import {Col} from "react-bootstrap";
const Card=(props)=>{
    return(
        <Col onMouseEnter={()=>{
          if(props.class!=='first'){
           props.onHover()
          }
        }} className={`card- ${props.class}`} size={12} sm={6} md={4}>
             <h3>  {props.num}</h3>
                    <h2 >{props.title}</h2>
                    <div className="mt-4 ca">
                        <p>
                            {props.description}
                        </p>
                    </div>
        </Col>

    )
}
export default Card;