import React from "react";
import "./Logo.css";
import LogoImg from "../../../Assets/logo.png"

const Logo = (props) => {
    return(
        <img className="Logo" src={LogoImg} alt="logo"/>
    )
}

export default Logo;