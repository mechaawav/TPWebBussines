import './MainCinco.css'
import React from 'react';
import {motion} from 'framer-motion'

const MainCinco = () => {
    return(
        <div>
            <motion.main initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} className='MainCinco' id='reseñas'>

                <div className='container-primerdiv'>
                    <div className='titulo-main5'>
                     <p className='reseñas'>Reseñas</p>
                     <h1 className='h1-main5'>Nuestros</h1> 
                     <h1 className='h1-main5'>clientes</h1>
                    </div>

                    <div className='div-2-main5'>
                      <div>
                         <hr className='hrmain5'/>
                      </div>
                      <div className='texto-div2'>
                         <p>Ayudamos a empresas ambiciosas como la suya a</p> 
                         <p>generar más ganancias mediante la generación de</p> 
                         <p>visibilidad que impulsa el tráfico web, se conecta</p> 
                         <p>con los clientes y aumenta las ventas en general.</p>
                      </div>
                      <div className='botones-texto-container'>
                         <i className="bi bi-arrow-down-left-circle botonestexto1"></i>
                         <i className="bi bi-arrow-up-right-circle botonestexto"></i>
                      </div>
                    </div> 
                </div>

                <div className='div-tres'>
                 <div className='logo1-div3'>
                   <i className="bi bi-person-heart logomain5"></i>
                 </div>
                 <div className='hr-texto-main5'>
                 <hr className='hr-divtres-main5' />
                  <div className='p-div3-main5'>
                   <p>"He estado trabajando con WeProgram4You exclusivamente desde 2020</p> 
                   <p>y ¡ha sido genial! Trabajan rápido y constantemente entregan un</p> 
                   <p>trabajo de alta calidad. Toman mi visión y la traducen en un diseño</p>
                   <p>profesional que funciona para mis objetivos comerciales. Realmente</p> 
                   <p>aprecio como siempre están enfocados en la función de la pieza, así</p>
                   <p>como en el diseño visual."</p>
                  </div>
                   <div className='h5-h6-main5'>
                    <h5 className='h5-main5'>Mustafa Rahman</h5>
                    <h6 className='h6-main5'> — CEO, Toogle</h6>
                   </div>
                 <hr className='hr-divtres-main5' />
                 </div>
                  <div className='logo2-div3'>
                   <i className="bi bi-person-heart logomain5"></i>
                  </div>
                </div>            
            </motion.main>
        </div>
    )
}

export { MainCinco }