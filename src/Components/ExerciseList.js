import React from "react"
import Card from "../Components/Card"

const ExerciseList = ({exercises}) =>{
    return(
        <div>
            {exercises.map((exercise) =>{
                return(
                    <div>
                    <Card
                        title = {exercise.title}
                        description = {exercise.description}
                        img = {exercise.img}
                        leftColor = {exercise.leftColor}
                        rightColor = {exercise.rightColor}
                />
                <br/>
                </div>
                )
            })}
        </div>
    )   
}


export default ExerciseList