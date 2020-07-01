import React from "react"
import exerciseImg from "../images/exercise.png"
import circlesImg from "../images/circles.png"
import "./styles/Card.css"

class Card extends React.Component{

    render(){

        const {title, description, img, leftColor, rightColor} = this.props

        return(
            <React.Fragment>
                <div className="card mx-auto Fitness-Card"
                    style = {{
                        backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || "#F60"}, ${rightColor || "#273934"})`
                    }}
                >
                    <div className="card-body">
                        <div className="row center">
                            <div className="col-6">
                                <img src={img || exerciseImg} className="float-right"/>
                            </div>
                            <div className="col-6 Fitness-Card-Info">
                                <h1>{title}</h1>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Card