// src/components/Categories.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import './Categories.css';

const Categories = ({ addToCart }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching category products:', error));
  }, [category]);

  return (
    <div className="categories">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h2>
      <div className="categories-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
