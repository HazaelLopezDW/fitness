import React from "react"
import Welcome from "../Components/Welcome"
import ExerciseList from "../Components/ExerciseList"
import AddButton from "../Components/AddButton"
import Loading from "../Components/Loading"
import Error from "../pages/500"

class Exercises extends React.Component{

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
            <Welcome
              userName = "Hazael López"
            />
            <ExerciseList
                exercises = {this.state.data}
            />
            <AddButton/>
        </React.Fragment>
        )
    }
}

export default Exercises