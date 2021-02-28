import React from 'react';

const Cart = (props) => {
console.log(props.cart)
const frList = props.cart.length;

return (
        <div>
            <h2>Friends Added: {frList}</h2>
            Total Salary: 
        </div>
    );
};

export default Cart;