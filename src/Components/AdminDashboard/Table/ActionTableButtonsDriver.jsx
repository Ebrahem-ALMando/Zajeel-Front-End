import React, {Component, useEffect, useState} from "react";


import axios from "axios";



import UpdateDriver from "../Drivers/UpdateDriver";
import DeleteDriver from "../Drivers/DeleteDricer";
import {AiFillEdit} from "react-icons/ai";
import {MdDeleteForever} from "react-icons/md";


const ActionTableButtonsDriver=(props)=>{
    const [dataDriver,setDataDriver]=useState([]);
    useEffect(() => {
        setDataDriver(props.Data);
    }, []);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

        return (
            <td>
               {/* Btn Update*/}
                {/*data-bs-toggle="modal" data-bs-target={"#UpdateModal"+ this.props.echRowID}*/}
                <button   style={{margin:'1%'}} type="button" className="btn btn-light"
                          onClick={() => {
                              handleShow();
                          }}
                >

                    <AiFillEdit />
                </button>
                {show?<UpdateDriver  show={show}  Data={props.Data}/>:null}
                {/*
                Btn Delete
                <button   style={{margin:'1%'}} type="button" className="btn btn-danger"
                          data-bs-toggle="modal" data-bs-target={"#DeleteModal"+ this.props.echRowID}
                          onClick={() => {
                              this.getUserDetails(this.props.echRowID)
                          }}

                >

                    <MdDeleteForever/></button>
                <DeleteDriver modalID={this.props.echRowID} Data={this.props.Data}/>*/}

            </td>
        )
}



export  default ActionTableButtonsDriver;

