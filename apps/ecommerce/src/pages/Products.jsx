import React from 'react';
import ProductTile from '../components/ProductTile';

function Products({ products }) {
  return (
    <div>
      <h2>All Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {products.map(product => (
          <ProductTile key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
