import './Footer.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'

const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2l3ok5i', 'template_qdauhg6', form.current, 'tJSRHyUqrVevIc2II')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <div >
            <motion.footer initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} id='contacto' className='footerstyle'>
              <div className='container-formtitulo'>
                <div className='titulo-footer'>
                 <p className='contacto'>Contacto</p>
                 <h1 className='h1-footer'>Pongamos</h1> 
                 <h1 className='h1-footer'>En Marcha</h1>
                 <h1 className='h1-footer'>Tu Proyecto</h1>
                </div>

                <div className='formulario-footer'>

                 <form ref={form} onSubmit={sendEmail}>
                   <label className='labelstyle'>Nombre:</label>
                   <input type="text" name="user_name" className='inputs-form'/>
                   <label className='labelstyle'>Email:</label>
                   <input type="email" name="user_email" className='inputs-form'/>
                   <label className='labelstyle'>Mensaje:</label>
                   <textarea name="message" className='textareaform'/>
                   <input type="submit" value="Enviar" className='btn-submit'/>
                 </form>          

                </div>

              </div>
                <div className='section-contacto-location'>
                   <div className='hr-container'>
                     <hr className='hr-footer'/>
                   </div> 
                    <div className='celular-contacto'>
                        <div className='logofooter-container'>
                          <i className="bi bi-telephone-fill logo-footer"></i>
                        </div>
                        <div className='celular-container'>
                        <p className='p-titulo'>Celular</p>
                        <p className='numero-celular'>(+54) 9 11-5503-1881</p>
                        </div>
                   </div>
                   <div className='hr-container'>
                     <hr className='hr-footer'/>
                  </div> 
                  <div className='location-footer'>
                    <div className='logofooter-container'>
                     <i className="bi bi-geo-alt-fill logo-footer"></i>
                    </div> 
                     <div className='location-container'>
                      <p className='p-titulo'>Nuestras Oficinas</p>
                      <p className='direccion'>Av. Hipólito Yrigoyen 247, Nueva Córdoba</p> 
                      <p className='direccion'>Córdoba, Argentina.</p>
                     </div>
                   </div>
                </div>
            </motion.footer>
        </div>
    )
}

export { Footer }