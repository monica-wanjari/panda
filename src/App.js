import React from 'react';
import './App.css';
 import Form from './components/Form'
 import Card from './components/Card'
 import Information from './components/Information'

import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch> 
       <Route path="/form" component={Form}/>
      <Route path="/card" component={Card} />
      <Route path="/information" component={Information} /> 
       </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
