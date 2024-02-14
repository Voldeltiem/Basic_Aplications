import React from 'react'
import ToDoList from '../components/To do list/ToDoList'
import Calculadora from '../components/calculadora/Calculadora'

export default function Home() {
    return (
        <div className='caja'>
           <ToDoList/>
           <Calculadora/>
        </div>
    )
}
