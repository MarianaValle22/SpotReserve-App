import React from 'react';
//import './assets/styles/Header.css';
import '../assets/styles/Header.css'
import ArdidasImage from '../assets/img/Ardidas.jpeg';

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
            <li><a href="/fut11">Fut 11</a></li>
            <li><a href="/fut8">Fut 8</a></li>
            <li><a href="/fut7">Fut 7</a></li>
            <li><a href="/fut5">Fut 5</a></li>
            <li className="ofertas"><a href="/nosotros" className="highlight">Nosotros</a></li>
        </ul>
      </nav>
      <div className="user-actions">
        <a href="#"></a>
        <a href="/Acceder">Acceder</a>
        <a href="#">contactanos</a>
      </div>
    </header>
    
    
  );
};

export {Header};