import React from 'react';

const CartPage = ({ cart }) => {
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
