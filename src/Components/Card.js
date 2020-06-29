import React from "react"
import exerciseImg from "../images/exercise.png"
import "./styles/Card.css"

class Card extends React.Component{

    render(){
        return(
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={exerciseImg} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>Es texto no Importa</h1>
                            <p>Porque consumiremos recursos de una API</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card