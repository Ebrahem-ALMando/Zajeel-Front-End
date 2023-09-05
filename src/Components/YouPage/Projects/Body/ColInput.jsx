import React from 'react'
import {Col} from "react-bootstrap";
const ColInput = (props) => {
  return (
      <Col xl={props.xl} className={`col-auto  ${props.classesCol}`} >
          <input className={` ${props.classInput} `}
                 name={props.name}
                 type="text"
                 placeholder={props.placeholder}/>
      </Col>
  )
}

export default ColInput