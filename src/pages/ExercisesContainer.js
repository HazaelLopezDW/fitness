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

                this.setState({
                    data, 
                    Loading: false
                })     
            } catch (error) {
                this.setState({
                    Loading: false,
                    error
                })
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
/*class ExercisesContainer extends React.Component{

    state = {
            data: [],
            Loading: true,
            error: null
        }

        async componentDidMount(){
            await this.fetchExercises()
        }

        fetchExercises = async () =>{
            try {
                let res = await fetch('http://localhost:8000/api/exercises/')
                let data = await res.json()

                this.setState({
                    data, 
                    Loading: false
                })     
            } catch (error) {
                this.setState({
                    Loading: false,
                    error
                })
            }
        }


    render(){
        if(this.state.Loading)
            return<Loading/>
        if(this.state.error)
            return<Error/>
        return(
        <React.Fragment>
            <Exercises
                data={this.state.data}
            />
        </React.Fragment>
        )
    }
}*/

export default ExercisesContainer