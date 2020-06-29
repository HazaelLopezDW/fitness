import React from "react"
import exerciseImg from "../images/exercise.png"
import circlesImg from "../images/circles.png"
import "./styles/Card.css"

class Card extends React.Component{

    render(){
        return(
            /*background: url('../../images/circles.png') no-repeat, linear-gradient(to right, #A74CF2, #617BFB);*/
            <div className="card mx-auto Fitness-Card"
                style = {{
                    backgroundImage: ``
                }}
            >
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