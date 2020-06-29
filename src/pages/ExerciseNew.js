import React from "react"
import ExerciseForm from "../Components/ExerciseForm"
import Card from "../Components/Card"

class ExerciseNew extends React.Component{

    state = {
        form: {
            title: "",
            description: "",
            img: "",
            leftColor: "",
            rightColor: ""
        }
    }

    handleChange = ev =>{
        this.setState({
            form: {
                ...this.state.form,
                [ev.target.name]: ev.target.value
            }
        })

    }

    render(){
        return(
            <div className="row">
                <div className="col-sm">
                    <Card
                        {...this.state.form}
                    />
                </div>
                <div className="col-sm">
                    <ExerciseForm
                        onChange={this.handleChange}
                        form={this.state.form}
                    />
                </div>
            </div>
        )
    }
}

export default ExerciseNew