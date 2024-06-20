/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { trabajos } from '../data/trabajos';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className='page' id='page-port'>
      <h1 className='heading'>Portfolio</h1>
      <hr />

      <section className='works'>
        {

          trabajos.map(trabajo => {
            return (
              <article key={trabajo.id} className='work-item'>
                <div className='mask'>
                  <img src={"/images/" + trabajo.id + ".png"} />
                </div>
                <span className='h2-trabajos'>{trabajo.categorias}</span>
                <h2 className='h2-trabajos'><Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link></h2>
                <h3 className='h2-trabajos'>´{trabajo.tecnologias}</h3>
              </article>)

          })
        }
      </section>




    </div>
  )
}

export default Portfolio;
