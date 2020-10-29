import React from "react";
import "./ControlHolder.css";
import BuildControls from "./BuildControls/BuildControls";

const ControlHolder = (props) => {
    return(
        <div className="ControlHolder">
            <BuildControls />
        </div>
    )
}

export default ControlHolder;