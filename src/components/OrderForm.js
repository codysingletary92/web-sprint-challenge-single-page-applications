import React from "react";

const OrderForm = (props) => {
    const { onChange } = props;



    return (
        <div className='orderform' style={{display:'flex', justifyContent:'space-evenly'}}>
            <form name="memberForm">
                <div className='form-body'>
                    <label>Name:
                        <input
                                type='text'
                                id="nameInput"
                                placeholder="Name"
                                name="name"
                                onChange={onChange}
                            ></input>
                    </label>
                    <br />
                    <br />
                    <label>Size:
                        <select onChange={onChange} name='size'>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                    </label>
                    <br />
                    <br />
                    <label>Toppings: <br />
                        <label>X-tra Cheese
                            <input type='checkbox' onChange={onChange} name='topping' id='xtra-cheese'/>
                        </label>
                        <br />
                        <label>Pepperoni
                            <input type='checkbox' />
                        </label>
                        <br />
                        <label>Sausage
                            <input type='checkbox' />
                        </label>
                        <br />
                        <label>Bacon
                            <input type='checkbox' />
                        </label>
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