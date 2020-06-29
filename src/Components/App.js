import React from "react"
import { BrouserRouter, Route, Switch} from "react-router-dom"
import Exercises from "./pages/Exercises"

const App = () => (
    <BrouserRouter>
        <Route exact path="/exercise" component={Exercises}/>
        <Route exact path="/exercise/new" component={ExerciseNew}/>
    </BrouserRouter>
)

export default App