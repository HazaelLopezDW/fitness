import React from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Exercises from "../pages/Exercises"
import ExerciseNew from "../pages/ExerciseNew"

const App = () => (
    <BrowserRouter>
        <Route exact path="/exercise" component={Exercises}/>
        <Route exact path="/exercise/new" component={ExerciseNew}/>
    </BrowserRouter>
)

export default App