import React from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Exercises from "../pages/Exercises"
import ExerciseNew from "../pages/ExerciseNew"
import NotFount from "../pages/ExerciseNew"

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise" component={Exercises}/>
            <Route exact path="/exercise/new" component={ExerciseNew}/>
            <Route component={NotFount}/>
        </Switch>
    </BrowserRouter>
)

export default App