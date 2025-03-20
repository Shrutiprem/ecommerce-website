// src/components/ManageProducts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ title: '', price: '', image: '', description: '', category: '' });
  const [editingProductId, setEditingProductId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingProductId) {
      await axios.put(`https://fakestoreapi.com/products/${editingProductId}`, form);
    } else {
      await axios.post('https://fakestoreapi.com/products', form);
    }
    setForm({ title: '', price: '', image: '', description: '', category: '' });
    setEditingProductId(null);
    // Refresh products after adding/editing
    const response = await axios.get('https://fakestoreapi.com/products');
    setProducts(response.data);
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditingProductId(product.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://fakestoreapi.com/products/${id}`);
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h3>Manage Products</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Product Title" required />
        <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" required />
        <input type="text" name="image" value={form.image} onChange={handleChange} placeholder="Image URL" required />
        <input type="text" name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
        <input type="text" name="category" value={form.category} onChange={handleChange} placeholder="Category" required />
        <button type="submit">{editingProductId ? 'Update Product' : 'Add Product'}</button>
      </form>
      <h4>Existing Products</h4>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price} 
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageProducts;
