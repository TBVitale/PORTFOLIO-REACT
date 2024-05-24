import React from 'react'

const Contacto = () => {
  return (
    <div className='page' id='page-contact'>
      <h1  className='heading'>Contacto</h1>
      <hr />
      <br />



      <form className='contact' action='mailto:vitaletobias1@gmail.com'>

        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellido' />
       <input type="text" placeholder='E-Mail' />
        <textarea placeholder='Motivo de Contacto'></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Contacto;