import React from "react"
import addImg from "../images/add.png"
import "./styles/AddButton.css"

const AddButton = () =>(
    <div >
        <a href="exercise/new"></a>
        <img src={addImg} className="Fitness-Add"/>
    </div>
)

export default AddButton