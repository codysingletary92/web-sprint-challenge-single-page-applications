import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import NavBar from './components/Navbar'
import OrderForm from './components/OrderForm'
import axios from 'axios';

const App = () => {
  const [form, setForm] = useState({name: '', size: '', special: '', xcheese: false, pep: false, saus: false, bac: false})

  const onChange = event => {
    const valueToUse = event.target['type'] === 'checkbox' ? event.target['checked'] : event.target['value']
    
    setForm({...form, [event.target['name']]: valueToUse})
    
  }

  const onSubmit = event => {
    console.log(event)
    event.preventDefault();
    const newOrder = {name: form.name,
                      size: form.size,
                      special: form.special,
                      xcheese: form.xcheese,
                      pep: form.pep,
                      saus: form.saus,
                      bac: form.bac}

    axios.post(`https://reqres.in/api/users`, newOrder)
    .then( res => {
      setForm({name: '', size: '', special: '', xcheese: false, pep: false, saus: false, bac: false});
      console.log(res.data)
    })
  }

  return (
    <div className='App'>
      <NavBar />

      <Switch>
        <Route exact path='/'>
          <h2>GET YOUR PIZZA</h2>
        </Route>

        <Route path='/Pizza'>
          <OrderForm onChange={onChange} form={form} onSubmit={onSubmit}/>
        </Route>
      </Switch>
      
    </div>
  );
};
export default App;
