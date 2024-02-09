import React, { useState, useContext } from 'react';
import Contexto from '../Context/Context';

export default function To_do_List() {
  const { tareas, setTareas } = useContext(Contexto);
  const [tarea, setTarea] = useState("");

  const handleGuardado = () => {
    if (tarea !== "") {
      setTareas([...tareas, tarea]);
      setTarea("");
    } else {
      alert("Debe ingresar una tarea para guardarla");
    }
  };

  const handleEliminar = (index) => {
    const listadoModificado = tareas.filter(( tarea,i) => i !== index);
    setTareas(listadoModificado);
  };

  return (
    <div className='caja'>
      <div>
        <h2>Lista de tareas</h2>
        <input
          type="text"
          placeholder='Ingrese una tarea'
          value={tarea}
          onChange={(evento) => setTarea(evento.target.value)}
        />
        <button onClick={handleGuardado}>Guardar</button>
      </div>
      <div>
        <h4>Lista de tareas</h4>
        <div className='caja'>
          <div>
            {tareas.map((tarea, index) => (
              <div key={index}>
                <li>{tarea}</li>
                <button onClick={() => handleEliminar(index)}>X</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
