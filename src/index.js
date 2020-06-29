import React from "react"
import ReactDOM from "react-dom"
import Card from "./Components/Card"
import Welcome from "./Components/Welcome"

// Creamos nuestro contenedor
const container = document.getElementById('root')

ReactDOM.render(
                <React.Fragment>
                  <Welcome/>
                  <Card
                      title = "Es texto no Importa"
                      description = "Porque consumiremos recursos de una API"
                      img = "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
                      leftColor = "#23aabc"
                      rightColor = "#67FF37"
                  />
                </React.Fragment>, container)
