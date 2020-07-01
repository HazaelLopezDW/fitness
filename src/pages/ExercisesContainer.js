import React from "react"
import { useState, useEffect } from "react"
import Exercises from "./Exercises"
import Loading from "../Components/Loading"
import Error from "./500"

const ExercisesContainer = () =>{

    if(loading)
        return<Loading/>
    if(error)
        return<Error/>
    return(
        <React.Fragment>
            <Exercises
                data={data}
            />
        </React.Fragment>    
    )
}

export default ExercisesContainer