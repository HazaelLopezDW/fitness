import React from "react"
import Card from "../Components/Card"

const ExerciseList = ({exercises}) =>(
    <div>
        {exercises.map((exercise) =>{
            return(
                <React.Fragment>
                    <Card
                        key = {exercise.id}
                        title = {exercise.title}
                        description = {exercise.description}
                        img = {exercise.img}
                        leftColor = {exercise.leftColor}
                        rightColor = {exercise.rightColor}
                    />
                </React.Fragment>
            )
        })}
    </div>
) 


export default ExerciseList