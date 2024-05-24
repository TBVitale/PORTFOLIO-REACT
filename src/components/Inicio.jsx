import React from 'react'
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className='home'>

      <h1>Hola! Mi nombre es <strong>Tobias Vitale,</strong> resido en la ciudad de Buenos Aires,(Argentina) y actualmente me enfoco en el <strong>Desarrollo Web,</strong>con algunas bases sobre el <strong>Back End,</strong> pero mas precisamente del lado del <strong>Front End.</strong></h1>

      <h2>Puedo ayudarte a crear tu sitio o aplicacion web, y poder darle mas relevancia y visibilidad en Internet. <Link to="/contacto">Contactame aqui!</Link> </h2>

      <section className='last-works'>

        <h2 className='heading'>Algunos de mis proyectos!</h2>
        <br />
        <Link to="/portfolio" className="button-proyects">Ir a proyectos</Link>

        <div className='works'>

        </div>

      </section>


    </div>
  )
}

export default Inicio;
