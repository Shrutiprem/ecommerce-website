// src/components/ProductCard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart'); // Redirect to the cart page after adding to cart
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
      <Link to={`/product/${product.id}`} className="details-link">View Details</Link>
    </div>
  );
};

export default ProductCard;
