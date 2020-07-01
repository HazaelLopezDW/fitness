import React from "react"
import "./styles/Welcome.css"

const Welcome = ({userName}) =>(
    <React.Fragment>
        <div className="container">  
            <div className="Fitness-User-Info">
                <h1>Hola {userName}</h1>
                <p>Tienes que confiar en Dios {userName}!</p>
            </div>        
        </div>
    </React.Fragment>
)

export default Welcome