import React, { lazy }  from 'react';
const Content = lazy(()=>import('./Component/Content'))

//import Potrait from './Component/About';
//import Navbar from './Component/Navbar.js';
//import { BrowserRouter as Router ,
  //Switch , Route, Routes  } from 'react-router-dom';




function App()  {
  
  return (
      
    <React.Fragment>
      <Content />
      
    </React.Fragment>
  );
    }
 

export default App;
