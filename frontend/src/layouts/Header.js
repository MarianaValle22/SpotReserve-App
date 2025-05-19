import React from 'react';
//import './assets/styles/Header.css';
import '../assets/styles/Header.css'
import ArdidasImage from '../assets/img/Logo.png';

import { TodoSearch } from '../components/TodoSearch';

const Header = () => {

    const [searchValue, setSearchValue] = React.useState('');

  return (
    <header className="header">
      <div className="logo">
        <img src={ArdidasImage} alt="Ardidas" />
        <h1 className="ardidas"><a href="/">SpotReserve</a></h1>
      </div>
      <div className="search-bar">
      
        <TodoSearch 

            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
        
      </div>
      <nav className="navigation">
        <ul>
            <li><a href="/fut11">Futbol</a></li>
            <li><a href="/fut8">Salones</a></li>
            <li><a href="/fut7">Coworking</a></li>
            <li><a href="/fut5">Habitaciones</a></li>
            <li className="ofertas"><a href="/torneos" className="highlight">torneos</a></li>
        </ul>
      </nav>
      <div className="user-actions">
        <a href="#"></a>
        <a href="/Acceder">Acceder</a>
        <a href="/Nosotros">Nosotros</a>
      </div>
    </header>
    
    
  );
};

export {Header};