import React from "react"
import "./styles/Welcome.css"

const Welcome = ({userName}) =>(
    <div className="container">  
        <div className="Fitness-User-Info">
            <h1>Hola {userName}</h1>
            <p>Tienes que confiar en Dios Hazael!</p>
        </div>        
    </div>
)

export default Welcome