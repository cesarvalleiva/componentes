import React from 'react'
import './Welcome.css'

const Welcome = (props) => {
  return (
    <div className='welcome'>
        <h2>Bienvenido {props.nombre} {props.apellido}</h2>
    </div>
  )
}

export default Welcome;