import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = (props) => {
    const controls = ["Mother Board", "Power System", "Disk", "RAM", "Cabinet"]
    return (
        <table className="BuildControls">
            <tbody>
                {controls.map(ctrl => {
                    return <BuildControl key={ctrl} item={ctrl} option="Yes" />
                })}
            </tbody>
        </table>
    )
}

export default BuildControls;