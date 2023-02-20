import './MainTres.css'
import React from 'react';
import {motion} from 'framer-motion'

const MainTres = () => {
    return(
        <div>
           <motion.main initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} id='portfolio' className='maintres'>

              <div className='skills-experiencia'>

            <div className='titulo3main'>
                 <p className='experiencia'>Experiencia</p>
                 <h1 className='h1-main3'>Skills y</h1>
                 <h1 className='h1-main3'>Experiencia</h1>
                 
                 <div className='container-hr-texto3'>

                <div className='container-hr3'>
                 <hr className='hrmain3'/>
               </div>

                <div className='container-texto3'> 
                 <p>Todos nuestros desarrolladores cuentan con</p> 
                 <p>distintos skills y experiencia para determinadas</p> 
                 <p>tareas, los cuales pueden ser muy utiles para crear</p> 
                 <p>variedad en cuanto a diseños y utilidades.</p>
                </div>

               </div>

            </div>

               <div className='container-experiencia'>
                 <h2 className='experiencia-h2'>Experiencia</h2>
                  <hr className='hr-experiencia'/>
                 <h3 className='experiencia-h3'>FrontEnd Developers</h3>
                 <p className='p-experiencia'> Microsoft </p>
                  <hr className='hr-experiencia'/>
                 <h3 className='experiencia-h3'> Diseñadores Web UI/UX </h3>
                 <p className='p-experiencia'> Amazon Inc</p>
                  <hr className='hr-experiencia'/>
                 <h3 className='experiencia-h3'>BackEnd Developers</h3>
                 <p className='p-experiencia'> Google </p>
                  <hr className='hr-experiencia'/>
                 <h3 className='experiencia-h3'>FullStack Developers</h3>
                 <p className='p-experiencia'> Facebook </p>
               </div>

              </div>

              <div className='container-skills-boton'>
                <div className='container-skills'>
                 <h2 className='skills-h2'>Skills</h2>

                  <div className='main3-cajas'>

                    <div className='caja-1'>
                      <i className="bi bi-tags-fill logomain3"></i>
                      <h3 className='skills-h3'> Diseño Visual</h3>
                    </div>

                    <div className='caja-1'>
                      <i className="bi bi-pencil-fill logomain3"></i>
                      <h3 className='skills-h3'> WireFrame </h3>
                    </div>  

                    <div className='caja-1'>
                      <i className="bi bi-triangle-fill logomain3"></i>
                      <h3 className='skills-h3'>Diseño de experiencia</h3> 
                      <h3 className='skills-h3'>de usuario</h3>
                     </div>             
                 </div>

                 <div className='main3-cajas'>

                    <div className='caja-1'>
                      <i className="bi bi-bezier logomain3"></i>
                      <h3 className='skills-h3'>Prototipos</h3>
                    </div>

                    <div className='caja-1'>
                      <i className="bi bi-egg-fill logomain3"></i>
                      <h3 className='skills-h3'>Dirección artística</h3>
                    </div> 

                    <div className='caja-1'>
                      <i className="bi bi-person-fill logomain3"></i>
                      <h3 className='skills-h3'>Investigación</h3>
                      <h3 className='skills-h3'>de usuarios</h3>
                    </div>

                </div>
               </div>
                <div className='boton-celeste'>
                  <a href="#contacto"><button className='botonh3'>¡Contratanos! <i className="bi bi-arrow-up-right"></i></button></a>
                </div>
              </div>    
   
            </motion.main>
        </div>
    )
}

export { MainTres }