import React from 'react';
import './ProductCard.css'; // Add styles for ProductCard

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <img src={product.image} alt={product.title} width="150" />
    </div>
  );
};

export default ProductCard;
