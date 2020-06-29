import React from "react"
import Exercises from "./Exercises"

class Exercise extends React.Component{

    handleClick = ev =>(
        console.log(this)
    ) 

    render(){
        return(
            <button onClick={this.handleClick}>
                Send....
            </button>
        )
    }
}

export default Exercise