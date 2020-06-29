import React from "react"
import addImg from "../images/add.png"
import "./styles/AddButton.css"

const AddButton = () =>(
    <div>
        <img src={addImg}/>
        <a href="exercises/new"></a>
    </div>
)

export default AddButton