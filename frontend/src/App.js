import { useRoutes, BrowserRouter} from 'react-router-dom';
import React from 'react';
import { Home } from './pages/Home';
//import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './assets/styles/Carousel.css';
import { Fut11 } from './layouts/Fut11.js';
import { Fut8 } from './layouts/Fut8.js';
import { Fut7 } from './layouts/Fut7.js';
import { Fut5 } from './layouts/Fut5.js';
import { Torneos } from './layouts/Torneos.js';
import { InfoNosotros } from './layouts/InfoNosotros.js';
import {Loging} from './components/Loging.js';
import Register from './components/Register.js';





//import { InfoHome } from './InfoHome';
//import { Form } from 'react-router-dom';

const AppRoutes= ()=>{
  let routes= useRoutes([
    { path: '/', element: <Home /> },
    {path: '/Fut11', element: <Fut11 />},
    {path: '/Fut8', element: <Fut8 />},
    {path: '/Fut7', element: <Fut7 />},
    {path: '/Fut5', element: <Fut5 />},
    {path: '/Torneos', element: <Torneos />},
    {path: '/Nosotros', element: <InfoNosotros />},
    { path: '/Acceder', element: <Loging /> },
    { path: '/Registro', element: <Register /> },

  ]
  )
  return routes
}



const App=()=> {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
