import React from "react";
import "./Header.css"
import Logo from "./Logo/Logo";
import Navigations from "./Navigations/Navigations";

const Header = (props) => {
    return(
        <div className="Header">
            <Logo />
            <Navigations />
        </div>
    )
}

export default Header;