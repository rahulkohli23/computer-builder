import React from "react";
import "./BuildControl.css";

const BuildControl = (props) => {
    return (
        <tr className="BuildControl">
            <td>{props.item}</td>
            {props.option ? <td>Option to be displayed</td> : null}
            <td><button className="Add">Add</button></td>
            <td><button className="Remove">Remove</button></td>
        </tr>
    )
}

export default BuildControl;