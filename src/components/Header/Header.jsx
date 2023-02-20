import './Header.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <div className='HeaderFont'>
        <header className='header1'>
            <h1 className='h1-nombrelogo'><i className="bi bi-journal-code logo"></i> WeProgram4You</h1>
            <nav className='navbar-header'>
                <a href="#acerca" className='navBarWords'>Acerca</a>
                <a className='navBarWords' href="#servicios">Servicios</a>
                <a className='navBarWords' href="#portfolio">Portfolio</a>
                <a className='navBarWords' href="#reseñas">Reseñas</a>
            </nav>
            <input className='searchBar' type="text" placeholder='Buscar'/>
        </header>
    </div>
    )
}

export { Header }