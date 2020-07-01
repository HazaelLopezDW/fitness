import React from "react"
import url from "../Config"
import useFetch from "../hooks/useFetch"
import Exercises from "./Exercises"
import Loading from "../Components/Loading"
import Error from "./500"

const ExercisesContainer = () =>{

    const { data, loading, error } = useFetch(`${url}/exercises`)

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