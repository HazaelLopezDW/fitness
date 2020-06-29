import React from "react"
import Welcome from "../Components/Welcome"
import ExerciseList from "../Components/ExerciseList"
import AddButton from "../Components/AddButton"

class Exercises extends React.Component{

    state = {
            data: []
        }

        async componentDidMount(){
            await this.fetchExercises()
        }

        fetchExercises = async () =>{
            let res = await fetch('http://localhost:8000/api/exercises/')
            let data = await res.json()

            console.log(data)
        }


    render(){
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