import React, { useState } from 'react'
import { Context } from 'react'
import { useContext } from 'react'
import Contexto from '../Context/Context'

export default function To_do_List() {
    const {tareas, setTareas} = useContext(Contexto)
    const {tarea , setTarea} = useState()

    const handleGuardado = () => {

    }
    return (
        <div className='caja'>
            <div>
                <h2>Lista de tareas</h2>
                <input type="text" placeholder='Ingrese una tarea'  value={tarea} onChange={(evento)=> setTarea(evento.target.value)}/>
            </div>
            <div>
                <h4>Lista de tareas</h4>
                <div className='caja'>
                    <div>
                        <li>una tarea</li>
                        <button>X</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
