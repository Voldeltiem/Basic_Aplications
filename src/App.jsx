import { useState } from "react"
import Contexto from "./Context/Context"
import Home from "./views/Home"
import Header from "./components/Header"

function App() {
  const [tareas, setTareas] = useState([])

  return (
    <div>
      <Contexto.Provider value={{tareas, setTareas}}>
        <Header/>
        <Home/>
      </Contexto.Provider>

    </div>
  )
}

export default App
