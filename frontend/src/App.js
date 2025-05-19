import { useRoutes, BrowserRouter} from 'react-router-dom';
import React from 'react';
import { Home } from './pages/Home';
//import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './assets/styles/Carousel.css';


//import { InfoHome } from './InfoHome';
//import { Form } from 'react-router-dom';

const AppRoutes= ()=>{
  let routes= useRoutes([
    { path: '/', element: <Home /> },
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
