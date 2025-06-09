import React, { useEffect, useState } from 'react';
import { formatCurrency } from '@demorepo/utils';
import './App.css';
import { Button } from '@demorepo/ui';

function App() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: 0, stock: 0 });

  useEffect(() => {
    fetch('http://localhost:8000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(data => {
        setProducts([...products, data]);
        setNewProduct({ name: '', price: 0, stock: 0 });
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/api/products/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      });
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit} className="add-product-form">
        <label>
          <span>Product Name:</span>
          <input type="text" name="name" placeholder="Product Name"
                 value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} required />
        </label>
        <label>
          <span>Price:</span>
          <input type="number" name="price" placeholder="Price"
                 value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })} required />
        </label>
        <label>
          <span>Stock:</span>
          <input type="number" name="stock" placeholder="Stock"
                 value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value, 10) })} required />
        </label>
        <Button type="submit">Add product</Button>
      </form>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{formatCurrency(product.price)}</td>
              <td>{product.stock}</td>
              <td>
                <Button variant="error" onClick={() => confirm('Are you sure you want to delete this product?') && handleDelete(product.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
