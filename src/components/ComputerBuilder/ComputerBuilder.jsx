import React from "react";
import "./ComputerBuilder.css";
import Parts from "./parts/Parts"

const ComputerBuilder = (props) => {
    return(
        <div className="ComputerBuilder">
            <Parts part="Ram"/>
        </div>
    )
}

export default ComputerBuilder;