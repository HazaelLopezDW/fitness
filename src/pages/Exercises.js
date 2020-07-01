import React from "react"
import Welcome from "../Components/Welcome"
import ExerciseList from "../Components/ExerciseList"
import AddButton from "../Components/AddButton"

const Exercises = ({data}) =>{
    return(
        <React.Fragment>
            <Welcome
            userName = "Hazael López"
            />
            <ExerciseList
                exercises = {data}
            />
            <AddButton/>
        </React.Fragment>
    )
}

export default Exercises