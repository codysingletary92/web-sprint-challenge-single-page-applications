import React from "react";
import { useHistory } from 'react-router-dom';

const NavBar = () => {
    const history = useHistory();

    const onClick = event => {
        const valueToUse = event.target['name'] === 'order' ? '/Pizza' : '/'
        history.push(valueToUse)
    }

    return (
      <div className='navbar' style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <h1>Lambda Eats</h1>
          <div className='buttonholder'>
              <button name='home' onClick={onClick}>
                  Home
              </button>
              <button name='order' onClick={onClick}>
                  Order
              </button>
          </div>
  
      </div>
    );
  };
  export default NavBar;