import React from 'react';
import Hero from '../components/Hero'; // optional, use a placeholder
import ProductTile from '../components/ProductTile';

function Home({ products }) {
  // choose 3 random products to feature
  const featured = products
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div>
      <Hero />
      <h2>Featured Products</h2>
      <div style={{ display: 'flex', gap: 20 }}>
        {featured.map(product => (
          <ProductTile key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
