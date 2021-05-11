import React from 'react';
import NavBar from "./Components/core/navbar/navbar"
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { home } from './Components/pages/home';
import { crypto } from './Components/pages/crypto';
import { apidocs } from './Components/pages/apidocs';
import { github } from './Components/pages/github';
import { contact } from './Components/pages/contact';
function App() {
 
  return (
   <>
   <Router>
   <NavBar/>
   <Switch>
     <Route exact path ="/" component={home}/>
     <Route  path ="/crypto" component={crypto}/>
     <Route  path ="/apidocs" component={apidocs}/>
     <Route  path ="/github" component={github}/>
     <Route  path ="/contact" component={contact}/>
   </Switch>
  </Router>

   </>
  );
}

export default App;

/*C:\Users\totu\OneDrive\Desktop\Projects\Personal\CryptoJS**/