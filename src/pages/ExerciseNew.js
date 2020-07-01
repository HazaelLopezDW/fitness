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
        }, 
        error: null,
        loading: false
    }

    handleSubmit = async ev =>{
        this.setState({
            loading: true
        })

        ev.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let res = await fetch('http://localhost:8000/api/exercises/', config)
            let json = await res.json();

            this.setState({
                loading: false
            })
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
        console.log(this.state)
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
                        onSubmit={this.handleSubmit}
                        form={this.state.form}
                    />
                </div>
            </div>
        )
    }
}

export default ExerciseNew