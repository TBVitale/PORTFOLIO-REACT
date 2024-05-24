import React from 'react'

const Servicios = () => {
  return (
    <div className='page' id='page-servi'>
      <h1 className='heading'>Servicios</h1>
      <hr />
      <br />



      <section className='services'>
        <article className='service'>
          <h2>Diseño Web</h2>
          <p>Hago que tu Web tenga un diseño y una estetica atractiva!</p>
        </article>

        <article className='service'>
          <h2>Desarrollo Web</h2>
          <p>Creo tu Web o Aplicacion desde cero!</p>
        </article>

        <article className='service'>
          <h2>Posicionamiento y reconocimiento Web</h2>
          <p>Hago que tu Web o Aplicacion tenga mayor alcance hacia los usuarios!</p>
        </article>


      </section>
    </div>
  )
}

export default Servicios;