import React from 'react'
import '../main.css'
import Formulario from './Formulario'

const NavBar = () => {
    return (
        <div className='planoTotal'>
                <div className='formulario'>
                    <img src="https://cdn-icons-png.flaticon.com/512/1294/1294359.png" alt="" />
                    <h2>Prueba Tecnica</h2>
                </div>
                <div>
                <Formulario/>
                </div>
        </div>
    )
}

export default NavBar
