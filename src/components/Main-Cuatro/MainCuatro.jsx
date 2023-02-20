import './MainCuatro.css'
import React from 'react';
import imagen1 from '../../assets/img1main4.png'
import imagen2 from '../../assets/img2main4.png'
import imagen3 from '../../assets/img3main4.png'
import {motion} from 'framer-motion'

const MainCuatro = () => {
    return(
        <div>
            <motion.main initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} className='main4' id='proyectos'>
                
             <div className='proyectos-h1'>
                <p className='proyectos'>Proyectos</p>
                <h1 className='h1-main4'>Últimos</h1> 
                <h1 className='h1-main4'>Proyectos</h1>
            </div>
        
             <div className='container-padre4'>
               <div className='contenedor-cajas-fotos'>
                 <hr  className='hr-main4'/>
                  <div className='h3-icono'>
                     <div>
                      <h3 className='h3-main4'>Diseño Landing Page</h3> 
                      <h3 className='h3-main4'>Tienda de Plantas</h3>
                     </div>
                     <i className="bi bi-arrow-up-right-circle-fill main4logo"></i>
                  </div>
                 <p>Web/Landing Page</p>
                 <img src={imagen1} alt="" className='img-main4' />
                </div>

                <div className='contenedor-cajas-fotos2'>
                 <hr  className='hr-main4'/>
                  <div className='h3-icono'>
                     <div>
                       <h3 className='h3-main4'>Diseño de un</h3> 
                       <h3 className='h3-main4'>VPS Hosting</h3>
                     </div>
                     <i className="bi bi-arrow-up-right-circle-fill main4logo"></i>
                 </div>                 
                 <p>Web/Landing Page</p>
                 <img src={imagen2} alt="" className='img-main4'/>
                </div>

               <div className='contenedor-cajas-fotos3'>
                 <hr  className='hr-main4'/>
                  <div className='h3-icono'>
                    <div>
                      <h3 className='h3-main4'>Diseño Landing Page</h3> 
                      <h3 className='h3-main4'>Tienda de Libros</h3>
                     </div>
                     <i className="bi bi-arrow-up-right-circle-fill main4logo"></i>
                  </div>  
                     <p>Web/Landing Page</p>
                     <img src={imagen3} alt="" className='img-main4'/> 
               </div>
               <i className="bi bi-arrow-up-right-circle logobotonmain4"></i>
            </div>
            </motion.main>
        </div>
    )
}

export { MainCuatro }