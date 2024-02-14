import React from 'react'
import IngresoTarea from './IngresoTarea'
import ListadoTareas from './ListadoTareas'

export default function ToDoList() {
    return (
        <div className='caja'>ToDoList
            <IngresoTarea />
            <ListadoTareas />
        </div>
    )
}
