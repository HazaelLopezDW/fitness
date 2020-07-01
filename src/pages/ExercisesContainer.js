import React from "react"
import { useState, useEffect } from "react"
import Exercises from "./Exercises"
import Loading from "../Components/Loading"
import Error from "./500"

const ExercisesContainer = () =>{
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    useEffect( () =>{
        const fetchExercises = async () =>{
            try {
                let res = await fetch('http://localhost:8000/api/exercises/')
                let data = await res.json()

                setData(data)
                setLoading(false)

            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchExercises()
    }, [])

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