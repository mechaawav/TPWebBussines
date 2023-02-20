import './App.css'
import { MainUno } from './components/Main-Uno/MainUno'
import { Header } from './components/Header/Header'
import { MainDos } from './components/Main-Dos/MainDos'
import { MainTres } from './components/Main-Tres/MainTres'
import { MainCuatro } from './components/Main-Cuatro/MainCuatro'
import { MainCinco } from './components/Main-Cinco/MainCinco'
import { Footer } from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <div className="App">
    <Header/> 
    <Routes>
      <Route path='/' element={<MainUno/>}/>
      <Route path='/Acerca' element={<MainUno/>}/>
   </Routes>
    <MainUno/>  
    <MainDos/>
    <MainTres/>
    <MainCuatro/>
    <MainCinco/> 
    <Footer/>
    </div>
    </>
  )
}

export default App
