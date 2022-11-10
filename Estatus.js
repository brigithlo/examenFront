import React from 'react'

// El componente Estatus no tiene componentes hijos.
// ESTADO: Estatus no tiene estado.
// MÉTODOS: Estatus no tiene métodos.
// PROPS: Estatus recibe de su padre la cantidad que va a mostrar dentro del span correpondiente.
// Maqueta de Estatus:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Estatus() {
  
  return (
    <header>
        { <h3>Selección anterior: {prevSelect.toUpperCase()}</h3>
      <h4>Cantidad de likes <ul>{prev.map((el, index) => <li key={index + el}>{el.toUpperCase()}</li>)}</ul></h4>}
    </header>
  )
}
