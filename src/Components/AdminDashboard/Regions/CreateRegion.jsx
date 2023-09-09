import React, { useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import stylesTBUT from './../../Home/Trips/Cards/CardTrips.module.css'
import styled from "styled-components";

import {AiOutlineUserAdd} from "react-icons/ai";
import {urlDomainApi} from "../../../URL_DomainApi";
import styles from '../Drivers/CreateDriver.module.css'
import {Button, Modal} from "react-bootstrap";

const CreateRegion=props=>{
    const [nameData, setNameData] = useState('');
    const [pointXData, setPointXData] = useState('');
    const [pointYData, setPointYData] = useState('');
    const [noteData, setNoteData] = useState('');
    const [show, setShow] = useState(false);


    const inputRegionName = (event) => {
        setNameData(event.target.value);
    };
    const inputRegionPointX = (event) => {
        setPointXData(event.target.value);
    };
    const inputRegionPointY = (event) => {
        setPointYData(event.target.value);
    };
    const inputRegionNote = (event) => {
        setNoteData(event.target.value);
    };
    const SubmitHandler=(e)=>{
        e.preventDefault();
    }

    const validateInput=()=>{

        if(nameData.length>0&&pointXData.length>0&&pointYData.length>0){

            return true
        }
        else {
            return  false;
        }
    }
    const createRegionData=async ()=>{

        if(validateInput()){
            //Submit Data
            await axios.post(`${urlDomainApi}/region`,{
                name: nameData,
                point_x: pointXData,
                point_y:pointYData,
                note:noteData,
            }).then((response)=>{
                if(response.status===200){
                    toast.success("تم الانشاء بنجاح");
                    getNewRegionData();
                    handleClose();
                    clearData();
                }else {
                    toast.error("حدث خطأ يرجى اعادة المحاولة");
                }
            });
        }
        else {
            toast.error("يرجى ادخال جميع البيانات");
        }
    }
    const clearData=()=>{
        setNameData('')
        setNoteData('')
        setPointXData('')
        setPointYData('')
    }
    const validateInputNumberX=(event)=> {
        // القيمة المدخلة من المستخدم
        let inputValue = event.target.value

        // تعيين نمط يسمح بالأرقام والنقطة فقط
        let pattern = /^[0-9.]*$/;

        // التحقق من القيمة ضد النمط
        if (!pattern.test(inputValue)) {
            // إذا كانت القيمة غير صالحة، قم بإزالة الأحرف غير الصالحة
            inputValue = inputValue.replace(/[^0-9.]/g, '');

            // قم بتحديث حقل الإدخال بالقيمة الصحيحة بعد الإزالة
            document.getElementById('pointX').value=inputValue
        }
    }
    const validateInputNumberY=(event)=> {
        // القيمة المدخلة من المستخدم
        let inputValue = event.target.value

        // تعيين نمط يسمح بالأرقام والنقطة فقط
        let pattern = /^[0-9.]*$/;

        // التحقق من القيمة ضد النمط
        if (!pattern.test(inputValue)) {
            // إذا كانت القيمة غير صالحة، قم بإزالة الأحرف غير الصالحة
            inputValue = inputValue.replace(/[^0-9.]/g, '');

            // قم بتحديث حقل الإدخال بالقيمة الصحيحة بعد الإزالة
            document.getElementById('pointY').value=inputValue
        }
    }

    const getNewRegionData = () => {
        props.getNewRegionsData();
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>

            <div className={`row text-right w-100 mb-3 pb-3 ${styles.btnCreate}`}>

                <button  type="button" className= {`${stylesTBUT.tripButton} `}
                         onClick={handleShow}   >
                    منظقة جديدة
                    <AiOutlineUserAdd/>
                </button>

            </div>
            {/* <div className="modal fade" id={"createModel"} tabIndex="-1" aria-labelledby="exampleModalLabel" >*/}
            <Modal  show={show} onHide={handleClose}>

                <div className={`modal-content ${styles.modalContent}`}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className={`btn-close ${styles.btnClose}`} data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                        </div>
                        <div className="text-center">
                            <h5 className="modal-title text-black" id="exampleModalLabel">إضافة منظقة</h5>
                        </div>
                    </div>


                    <div dir={"rtl"} className="modal-body text-black">
                        <form className="form" onSubmit={SubmitHandler}>
                            <div className="row g-3 align-items-center" style={{ marginBottom: '1rem' }}>
                                <div className="col-md-4">
                                    <label htmlFor="employeeName" className="col-form-label">اسم المنظقة</label>
                                </div>
                                <div className="col-md-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="employeeName"
                                        placeholder="الاسم هنا"
                                        onChange={inputRegionName}
                                    />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center" style={{ marginBottom: '1rem' }}>
                                <div className="col-md-4">
                                    <label htmlFor="employeeSalary" className="col-form-label">النقطة الافقية</label>
                                </div>
                                <div className="col-md-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="pointX"
                                        onInput={validateInputNumberX}
                                        placeholder="المحور الافقي (أرقام فقط)"
                                        onChange={inputRegionPointX}

                                    />


                                </div>
                            </div>
                            <div className="row g-3 align-items-center" style={{ marginBottom: '1rem' }}>
                                <div className="col-md-4">
                                    <label htmlFor="experience" className="col-form-label">النقطة العمودية</label>
                                </div>
                                <div className="col-md-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="pointY"
                                        onInput={validateInputNumberY}
                                        placeholder="المحور العمودي (أرقام فقط)"
                                        onChange={inputRegionPointY}

                                    />

                                </div>
                            </div>
                            <div className="row g-3 align-items-center" style={{ marginBottom: '1rem' }}>
                                <div className="col-md-4">
                                    <label htmlFor="description" className="col-form-label">ملاحظات</label>
                                </div>
                                <div className="col-md-8">
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        placeholder="الملاحظات هنا"
                                        onChange={inputRegionNote}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4 offset-md-4 w-100" style={{ marginBottom: '1rem' }}>
                                <button
                                    type="submit"
                                    className={stylesTBUT.tripButton}

                                    data-bs-dismiss="modal"
                                    onClick={createRegionData}
                                >
                                    انشاء
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-dark w-100" data-bs-dismiss="modal" onClick={handleClose}>اغلاق</button>

                    </div>
                </div>

            </Modal>
        </>
    )
}

export default CreateRegion;
