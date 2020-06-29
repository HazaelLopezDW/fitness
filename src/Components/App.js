import React from "react"
import { BrouserRouter, Route, Switch} from "react-router-dom"
import Exercises from "./pages/Exercises"

const App = () => (
    <BrouserRouter>
        <Route path="" component={Exercises}/>
    </BrouserRouter>
)

export default App