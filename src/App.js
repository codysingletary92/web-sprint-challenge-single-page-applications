import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import NavBar from './components/Navbar'
import OrderForm from './components/OrderForm'
import axios from 'axios';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(2, 'you must use more than 6 characters').required('You must provide Name'),
  size: yup.string().test('match','You must select a size', function(arg){
    return arg !== '0'
  })
});


const App = () => {
  let order = '';
  const [errors, setErrors] = useState({name: '', size: ''})
  const [form, setForm] = useState({name: '', size: '0', special: '', xcheese: false, pep: false, saus: false, bac: false})

  const onChange = event => {
    const valueToUse = event.target['type'] === 'checkbox' ? event.target['checked'] : event.target['value']
    if (event.target['type'] !== 'checkbox'){
      setFormErrors(event.target['name'], valueToUse)
    }
    
    setForm({...form, [event.target['name']]: valueToUse})
    
  }

  const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then( () => setErrors({...errors, [name]: ''}))
    .catch( err => setErrors({...errors, [name]: err.errors[0]}))
  }

  const onSubmit = event => {
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

        <Route exact path='/Pizza'>
        <div style={{color: 'red'}}>
        <div>
          {errors.name}
        </div>
        <div>
          {errors.size}
        </div>
      </div>
          <OrderForm errors={errors} onChange={onChange} form={form} onSubmit={onSubmit}/>
        </Route>
      </Switch>
      
    </div>
  );
};
export default App;
