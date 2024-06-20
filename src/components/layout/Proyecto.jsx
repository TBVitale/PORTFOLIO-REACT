import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { trabajos } from '../../data/trabajos';

const Proyecto = () => {

    const[proyecto, setProyecto]= useState({});
    const params= useParams();

    useEffect(()=>{
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id)
        
        setProyecto(proyecto[0])
    
    
    }, []);

  return (
    <div className='page page-proyect'>
      <h1 className='heading'>{proyecto.nombre}</h1>
      <hr />
      <div className='mask'>
                  <img src={"/images/" + proyecto.id + ".png"} />
        </div>
        <p>Tecnologias utilizadas: {proyecto.tecnologias}</p>
        <p>Categoria: {proyecto.categorias}</p>
        <p>Description: {proyecto.description}</p>
        <a target='_blank' href={"https://" + proyecto.url}>Ir al proyecto</a>
      

       

    </div>
  )
}

export default Proyecto;
