import React from "react"
import url from "../Config"
import ExerciseNew from  "./ExerciseNew"
import FatalError from "./500"
import Loading from "../Components/Loading"

class ExerciseNewContainer extends React.Component{

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

            let res = await fetch(`${url}/exercises`, config)
            let json = await res.json();

            this.setState({
                loading: false
            })

            this.props.history.push('/exercise')
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
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
        if(this.state.loading)
            return<Loading/>
        if(this.state.error)
            return<FatalError/>

        return(
            <ExerciseNew
                form={this.state.form}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
        )
    }
}

export default ExerciseNewContainer