import './MainDos.css'
import React from 'react';
import { motion } from "framer-motion"

const MainDos = () => {
  
    return(
      <div>
           <motion.main initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} className='MainDos' id='servicios'>

            <div>
                <div className='titulo2main'>
                <p className='servicios'>Servicios</p>
                <h1 className='h1-main2'>Servicios Que</h1>
                <h1 className='h1-main2'>Ofrecemos</h1>
                </div>

                <div className='container-hr-texto2'>

                 <div className='contenedorhr2'>
                  <hr className='hrmain2' />
                 </div>

                 <div className='texto2main'>
                  <p>Gracias a la gran mayoría de servicios</p> 
                  <p>que ofrecemos, logramos un trabajo mas</p>  
                  <p>completo y adecuado al cliente.</p>
                </div>
             </div>
             <div className='boton-logo'>
                <a href="#proyectos"><button className='botonmain2'>Mira nuestros servicios <i className="bi bi-arrow-up-right-circle"></i></button></a>
             </div>
            </div>

            <div className='container-servicios'>

                <div className='servicio-01'>
                  <hr className='hr-servicios' />
                  <h3 className='h3-main2'>01/</h3>
                  <h1 className='h1-servicios'>Diseño UI/UX</h1>
                  <h1 className='h1-servicios'>Web</h1>
                  <p>Explora</p>
                  <i className="bi bi-arrow-up-right-circle-fill arrow-violeta"></i>
                  <hr className='hr-servicios'/>
                </div>

                <div className='servicio-02'>
                  <h3 className='h3-main2'>02/</h3>
                  <h1 className='h1-servicios'>Diseño UI/UX</h1>
                  <h1 className='h1-servicios'>Móvil</h1>
                  <p>Explora</p>
                  <i className="bi bi-arrow-up-right-circle-fill arrow-violeta"></i>
                  <hr className='hr-servicios'/>
                </div>

                <div className='servicio-03'>
                  <h3 className='h3-main2'>03/</h3>
                  <h1 className='h1-servicios'>Diseño Web/Móvil</h1> 
                  <h1 className='h1-servicios'>con HTML5 y CSS3</h1>
                  <p>Explora</p>
                  <i className="bi bi-arrow-up-right-circle-fill arrow-violeta"></i>
                </div>

              </div>
            </motion.main>
        </div>
    )
}

export { MainDos }