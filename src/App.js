import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Footer,Spinner} from "./components";
import {Home ,Error } from "./routers";


function App() {
  return (
   <section>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="*" component={Error}/>
        </Switch>
      </Router>
     <Footer/>
   </section> 
  );
}

export default App;


