import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { formatCurrency } from '@demorepo/utils';
import styles from './Product.module.css';
import { Button } from '@demorepo/ui';

function Product({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);
  const { addToCart } = useContext(CartContext);

  if (!product) return <p>Product not found</p>;

  return (
    <div className={styles.product}>
      <div className={styles.leftPane}>
        <img className={styles.image} src={product.image} alt={product.name} />
      </div>
      <div className={styles.rightPane}>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.price}>{formatCurrency(product.price)}</p>
        <p className={styles.description}>{product.description}</p>
        {product.stock > 0 && (
          <Button onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
}

export default Product;

