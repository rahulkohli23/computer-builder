import React from "react";
import "./Parts.css";
import Ram from "../../../Assets/RAM.jpg";
import Hdd from "../../../Assets/HDD.jpg";
import MotherBoard from "../../../Assets/MotherBoard.jpg";
import Power from "../../../Assets/power.jpeg";
import Cabinet from "../../../Assets/Cabinet.jpg";

const Parts = (props) => {
    switch(props.part){
        case "Hdd":
            return (
                <div>
                    <img src={Hdd} alt="Hdd"/>
                </div>
            )
        case "Ram":
            return (
                <div>
                    <img src={Ram} alt="Ram"/>
                </div>
            )
        case "MotherBoard":
            return (
                <div>
                    <img src={MotherBoard} alt="MotherBoard"/>
                </div>
            )
        case "Power":
            return (
                <div>
                    <img src={Power} alt="Power"/>
                </div>
            )
        case "Cabinet":
            return (
                <div>
                    <img src={Cabinet} alt="Cabinet"/>
                </div>
            )
        default:
            return (<div>There should be a Part Here ...</div>)
    }
}

export default Parts;