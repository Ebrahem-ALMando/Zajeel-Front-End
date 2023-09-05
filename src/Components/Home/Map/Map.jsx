import React, {useEffect, useRef, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import 'leaflet-routing-machine/dist/leaflet-routing-machine.min.js';

import L from 'leaflet';
import "leaflet-routing-machine";

import styles from "./Map.module.css";
import stylesT from "./../Trips/Cards/CardTrips.module.css"
import {Col, Container, Row} from "react-bootstrap";

const Map = () => {
    const mapRef = useRef();
    const  [isLoad,setIsLoad]=useState(false);
    const  [locStart,setLocStart]=useState("");
    const [beginPointX,setBeginPointX]=useState("");
    const [endPointX,setEndPointX]=useState("");
    const [beginPointY,setBeginPointY]=useState("");
    const [endPointY,setEndPointY]=useState("");

    useEffect(() => {
    setTimeout(()=>{
       const map = mapRef.current;
        if(locStart.length>0){
       /* if(beginPoint!=null&&endPoint!=null){*/


       if (map != null) {
           const startCoords = [beginPointX,beginPointY];
           const endCoords =[endPointX,endPointY];

           console.log(startCoords)
           console.log(endCoords)
           const routingControl = L.Routing.control({
               waypoints: [
                   L.latLng(startCoords[0], startCoords[1]),
                   L.latLng(endCoords[0], endCoords[1])
               ],
               routeWhileDragging: true,
               draggableWaypoints: false, // تعطيل تحريك المسار بعد رسمه
               addWaypoints: false,
               lineOptions: {
                   styles: [
                       {
                           color: '#1d8cf8'
                           , opacity: 1
                           , weight: 4
                       }
                   ]
               }
           });

           routingControl.addTo(map);
           /*
                      map.dragging.disable();
                      map.touchZoom.disable();
                      /!*  map.doubleClickZoom.disable();*!/
                      map.scrollWheelZoom.disable();
                      map.boxZoom.disable();
                      map.keyboard.disable();*/

       }
       }
   },1000)

        const customIcon = new L.icon({
            iconUrl: require('./Location map.png'),
            iconRetinaUrl:require('./Location map.png'),// مسار الأيقونة الخاصة بك
            iconSize: [32, 32], // حجم الأيقونة
            iconAnchor: [16, 32], // محور الأيقونة
            tooltipAnchor: [0, -32], // محور النص في العلامة
            popupAnchor: [0, -32] // محور النص في العلامة المنبثقة (Popup)
        });
        L.Marker.prototype.options.icon = customIcon;
    }, []);
const setLoc=()=>{
    setTimeout(()=>{
        const map = mapRef.current;

        console.log(endPointX,endPointY)
        console.log(beginPointX,beginPointY)
        if(locStart.length>0){
            setIsLoad(true);

            if (map != null) {
                const startCoords = [beginPointX,beginPointY];
                const endCoords =[endPointX,endPointY];

                const routingControl = L.Routing.control({
                    waypoints: [
                        L.latLng(startCoords[0], startCoords[1]),
                        L.latLng(endCoords[0], endCoords[1])
                    ],
                    routeWhileDragging: true,
                    draggableWaypoints: false, // تعطيل تحريك المسار بعد رسمه
                    addWaypoints: false,
                    lineOptions: {
                        styles: [
                            {
                                color: '#1d8cf8'
                                , opacity: 1
                                , weight: 4
                            }
                        ]
                    }
                });

                routingControl.addTo(map);

                /*
                           map.dragging.disable();
                           map.touchZoom.disable();
                           /!*  map.doubleClickZoom.disable();*!/
                           map.scrollWheelZoom.disable();
                           map.boxZoom.disable();
                           map.keyboard.disable();*/

            }
        }
    },1000)
}

const print =()=>{
    console.log(endPointX,endPointY)
    console.log(beginPointX,beginPointY)
}
    const setBeginPointLoc=async (e)=>{
            const points = e.target.value.split(',');

            setBeginPointX(points[0])

            setBeginPointY(points[1])

       /*       setLoc()*/
      //  await  print();

    }
    const setEndPointLoc =  (e) => {
        const points = e.target.value.split(',');
          setEndPointX(points[0]);
          setEndPointY(points[1]);
        setLocStart("get")



    }

    //
    //  يجب الانتباه الى تغيير المسار في select انا حاليا مكرر الحدث بدو ازالة
    //
    return (
        <section className={`${styles.mapSec}`}>
            <Container className={``} dir="">
                <Row  xl={6} className={` row justify-content-center `}>
                    <Col xl={8} className={`col-auto  `}>
                        <h1 className={`${styles.titleMap}`} >
                            مسارات الخطوط
                        </h1>

                    </Col>
                    <Col xl={8} className={`col-auto  `}>
                        <p className={`${styles.textMap}`} >
                           يمكنك مشاهدة جميع الخطوط مباشرة على الخريطة وجميع المواقف الموجودة على الخط الذي تم اختياره من خلال اختيار نقطة البداية ونقطة النهاية
                        </p>

                    </Col>

                </Row>

                <Row  xl={6} className={` row justify-content-center `}>

                        <Col xl={6} className={`col-auto col-6 `}>
                            <p className={`${styles.textFilter} `}>
                                منطقة النهاية
                            </p>
                            <select className={`${styles.compoFilter} `} onInput={setEndPointLoc}

                            >


                                    <option>
                                        ----
                                    </option>

                                <option
                                    value={[[36.18778967433934, 36.72327671109137]]}

                                >
                                    سرمدا
                                </option>
                                <option>
                                    ادلب
                                </option>
                                <option
                                    value={[[36.58677554516146, 37.04643498605561]]}
                                >
                                    اعزاز
                                </option>
                            </select>
                        </Col>
                        <Col xl={6} className={`col-auto col-6 `}>
                            <p className={`${styles.textFilter} `}>
                                منطقة البداية
                            </p>
                            <select className={`${styles.compoFilter} `}

                                    onInput={

                                            setBeginPointLoc

                                    }
                            >
                                <option>
                                    ----
                                </option>
                                <option
                                    value={[[35.93044221577073, 36.63428119557299]]}

                                >
                                    ادلب
                                </option>
                                <option
                                    value={[[36.58677554516146, 37.04643498605561]]}
                                >
                                    اعزاز
                                </option>
                                <option>
                                    سرمدا
                                </option>
                            </select>

                        </Col>


                </Row>
                <Row  xl={6} className={` row justify-content-center `}>
                    <Col xl={6} className={`col-auto col-6 `}>
                        <button onClick={setLoc} className={`${stylesT.tripButton} ${styles.buttnGetPath} `}>
                            عرض المسار
                        </button>
                    </Col>
                </Row>
            </Container>


            <MapContainer
                draggable={false}
                className={styles.customMapContainer}
                center={[35.93044221577073, 36.63428119557299]} zoom={13}  ref={mapRef}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
{/*                <Marker
                    title="نص جديد عند مرور المؤشر"
                    title="البداية"
                    icon={customIcon} className={styles.mark}  position={[35.93044221577073, 36.63428119557299]} />*/}
                {isLoad?
               <>
                   <Marker position={[beginPointX,beginPointY]}/>
                   <Marker position={[endPointX,endPointY]} />
                  {/* <Marker position={[36.58122743179597, 37.03300248335753]} />

                   <Marker position={[36.56654540726946, 37.00442086395486]} />
                   <Marker position={[36.45487395709631, 37.03616297883987]} />*/}
               </>
                :null}
            </MapContainer>

        </section>

    );

};

export default Map;
