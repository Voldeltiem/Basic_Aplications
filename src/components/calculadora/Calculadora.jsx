import React from 'react'
import PantallaCalculadora from './PantallaCalculadora'
import Digitador from './Digitador'

export default function Calculadora() {
    return (
        <div className='caja'>Calculadora
            <PantallaCalculadora />
            <Digitador />
        </div>
    )
}
