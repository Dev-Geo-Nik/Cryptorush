import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {AppSection} from "./AppStyle";

import {Home ,Error } from "./routers";

function App() {
  return (
   <AppSection>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="*" component={Error}/>
        </Switch>
      </Router>
   </AppSection> 
  );
}

export default App;


