import React from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Exercises from "../pages/Exercises"
import ExerciseNewContainer from "../pages/ExerciseNewContainer"
import NotFount from "../pages/404"

const App = () => (
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={Exercises}/>
                <Route exact path="/exercise/new" component={ExerciseNewContainer}/>
                <Route component={NotFount}/>
            </Switch>
        </BrowserRouter>
)

export default App