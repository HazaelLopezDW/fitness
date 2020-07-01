import React from "react"
import Card from "../Components/Card"

const ExerciseList = ({exercises}) =>(
    <div>
        {exercises.map((exercise) =>{
            return(
                <React.Fragment>
                    <Card
                        key = {exercise.id}
                        {...exercise}
                    />
                </React.Fragment>
            )
        })}
    </div>
) 


export default ExerciseList