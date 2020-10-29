import React, {Component} from "react";
import "./Layout.css";
import Header from "../components/Header/Header"
import ComputerBuilder from "../components/ComputerBuilder/ComputerBuilder";
import ControlHolder from "../components/ControlHolder/ControlHolder"
import Assemble from "../components/Assemle/Assemble"

class Layout extends Component {

    render() {
        return (
            <div>
                <Header />
                <ComputerBuilder />
                <ControlHolder />
                <Assemble />
            </div>
        )
    }
}

export default Layout;