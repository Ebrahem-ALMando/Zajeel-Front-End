import React from 'react'
import {Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const RowText = (props) => {
  const [tKey, i18n] = useTranslation();
  return (
      <Row
          xl={6}
          className={` row  justify-content-center ${props.classes} ${props.bgColor}`}
      >
        <Col xl={props.xl} className={`col-auto mb-3 ${props.classesCol}`}>
          <p className={props.classesText}>{tKey(props.text)}</p>
        </Col>
          {props.isImage?
              <Col xl={10} className={`mt-4 mb-4 col-auto text-center `}>
                  <img className={`${props.classesImg}`} src={`/assets/img/UsPage/${props.nameImg}`} alt={"#Img"}/>
              </Col>
              :null
          }
          {props.text_2?
              <Col xl={props.xl} className={`col-auto ${props.classesCol}`}>
                  <p className={`${props.classesText_2}  `}>{tKey(props.text_2)}</p>
              </Col>
          :null}
      </Row>
  )
}

export default RowText