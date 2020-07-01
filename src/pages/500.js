import React from "react"
import "../Components/styles/Error.css"
import FatalErrorImg from "../images/500.png"

const FatalError = () =>(
    <React.Fragment>
        <div className={"text-center"}>
            <h1 className={"Error_Text"}>Error 500: Unexpected Error</h1>
            <img src={FatalErrorImg} alt={""}/>
        </div>
    </React.Fragment>
)

export default FatalError