import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import NavBar from './components/Navbar'
import OrderForm from './components/OrderForm'

const App = () => {
  const [form, setForm] = useState({name: '', size: '', toppings: []})

  const onChange = event => {
    console.log(event.target['name'])
    
  }

  return (
    <div className='App'>
      <NavBar />

      <Switch>
        <Route exact path='/'>
          <NavBar />
          {/* Plus homepage screen */}
        </Route>

        <Route path='/Pizza'>
          <OrderForm onChange={onChange} />
        </Route>
      </Switch>
      
    </div>
  );
};
export default App;
