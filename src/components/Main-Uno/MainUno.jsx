import React from 'react';
import miimagen from '../../assets/logo.png'
import {motion} from 'framer-motion'
import './MainUno.css'

const MainUno = () => {
    return(
        <div>
            <motion.main initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} id='acerca'>
            
                <div className='container-hero'> 
                 
                   <div className='titulo1main'>
                     <motion.p initial={{x:-30}} animate={{x:2}} className='hola'>¡Hola!</motion.p>
                     <motion.h1 initial={{x:-30}} animate={{x:2}} className='h1-main'>Tenemos</motion.h1>
                     <motion.h1 initial={{x:-30}} animate={{x:2}} className='h1-main'>Experiencia de</motion.h1>
                     <motion.h1 initial={{x:-30}} animate={{x:2}} className='h1-main'>Diseño</motion.h1>

                   </div> 
                    <img src={miimagen} alt="" />
                </div>          

                <div className='container-hr-texto'>
                 <div className='contenedorhr1'>
                   <hr className='hrmain1' /> 
                 </div>
                 <div className='texto1main'>
                  <p>¡Hola! Somos una empresa que se dedica a encontrar a los</p>
                  <p>mejores desarrolladores para que puedan llevar a cabo</p> 
                  <p>el servicio que necesite el cliente.</p>
                 </div>
               </div>
                
               <div className='botones-1main'>
                <a href="#contacto"><button className='boton-contactanos'>Contactanos <i className="bi bi-send"></i></button></a>
                <a href="#proyectos"><button className='boton-portfolio'>Portfolios <i className="bi bi-arrow-up-right"></i></button></a>
               </div> 

               <div className='redes-sociales'>
                <p className='p-redessociales'> Chequea nuestras redes sociales</p>
                <a className='redes-animacion' href="https://instagram.com/mechaa.wav?igshid=YmMyMTA2M2Y=" target='_blank'><i className="bi bi-instagram logos-main1"></i></a>
                <a className='redes-animacion' href="https://github.com/mechaawav" target='_blank'><i className="bi bi-github logos-main1"></i></a>
                <a className='redes-animacion' href="https://www.behance.net/m3ch1jaurello" target='_blank'><i className="bi bi-behance logos-main1"></i></a>
               </div>

            </motion.main>
            
        </div>
    )
}

export { MainUno }