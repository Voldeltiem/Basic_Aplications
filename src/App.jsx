import Header from "./components/Header"
import Contenido from "./components/Contenido"
import { useState } from "react"
import Contexto from "./Context/Context"

function App() {
  const [tareas, setTareas] = useState([])

  return (
    <div>
      <Contexto.Provider value={{tareas, setTareas}}>
        <Header />
        <Contenido />
      </Contexto.Provider>

    </div>
  )
}

export default App
