import React, { useState } from "react";
// import axios from 'axios';

const OrderForm = (props) => {
    const { onChange, form, onSubmit } = props;


    return (
        <div className='orderform' style={{display:'flex', justifyContent:'space-evenly'}}>
            <form name="memberForm" onSubmit={onSubmit}>
                <div className='form-body'>
                    <label>Name:
                        <input
                                type='text'
                                id="nameInput"
                                placeholder="Name"
                                name="name"
                                onChange={onChange}
                                value={form.name}
                            ></input>
                    </label>
                    <br />
                    <br />
                    <label>Size:
                        <select onChange={onChange} name='size' value={form.size}>
                            <option value=''>--Select Size--</option>
                            <option value='1'>Small</option>
                            <option value='2'>Medium</option>
                            <option value='3'>Large</option>
                        </select>
                    </label>
                    <br />
                    <br />
                    <label>Toppings: <br />
                        <label>X-tra Cheese
                            <input type='checkbox' checked={form.xcheese} onChange={onChange} name='xcheese'/>
                        </label>
                        <br />
                        <label>Pepperoni
                            <input type='checkbox' checked={form.pep} name='pep' onChange={onChange}/>
                        </label>
                        <br />
                        <label>Sausage
                            <input type='checkbox' checked={form.saus} name='saus' onChange={onChange}/>
                        </label>
                        <br />
                        <label>Bacon
                            <input type='checkbox' checked={form.bac} name='bac' onChange={onChange}/>
                        </label>
                    </label>
                    <br />
                    <br />
                    <label>Special Instructions:
                        <br />
                        <input type='textarea' name='special' onChange={onChange} value={form.special} style={{height: 120, width: 300}}/>
                    </label>
                    <br />
                    <br />
                    <input type='submit' />
                </div>
            </form>
        </div>
    );
  };
  export default OrderForm;