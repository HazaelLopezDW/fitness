import React from "react"
import { Link } from "react-router-dom"
import addImg from "../images/add.png"
import "./styles/AddButton.css"

const AddButton = () =>(
        <Link to="exercise/new">
            <img src={addImg} className="Fitness-Add"/>
        </Link>
)

export default AddButton