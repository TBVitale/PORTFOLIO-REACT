import React from 'react'
import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <div className='page' id='page-contact'>
      <h1 className='heading'>Contacto</h1>
      <hr />

      <div className='content-icons'>
        <Link to="https://github.com/TBVitale" target="_blank" title="Instagram">
          <img src="\imagesIcon\icons8-instagram-30.png" alt="Git Hub" className="img-redes" />
        </Link>

        <Link to="https://twitter.com/tobiasvitale4" target="_blank" title="twitter">
          <img src='.\imagesIcon\icons8-twitter-30.png' alt="Twitter" className="img-redes" />
        </Link>

        <Link to="https://www.linkedin.com/in/tobias-vitale-865027282/" target="_blank" title="linked in">
          <img src=".\imagesIcon\icons8-linkedin-30.png" alt="Linked in" className="img-redes" />
        </Link>

        <Link to="https://www.instagram.com/tobbbi03/" target="_blank" title="GitHub">
          <img src='.\imagesIcon\icons8-github-30 .png'  alt="Instagram" className="img-redes" />
        </Link>

        <Link to="mailto:vitaletobias1@gmail.com" target="_blank" title="Gmail">
          <img src=".\imagesIcon\icons8-gmail-30.png" alt="Gmail" className="img-redes" />
        </Link>
      </div>

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