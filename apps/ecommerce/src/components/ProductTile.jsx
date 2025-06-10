import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductTile.module.css';
import { formatCurrency } from '@demorepo/utils';
import { Button, Toast, Confetti } from '@demorepo/ui';
import { CartContext } from '../CartContext';

function ProductTile({ product }) {
  const { addToCart } = useContext(CartContext);
  const [showToast, setShowToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState('');


  const handleAddToCart = (e, product) => {
    e.preventDefault();
    addToCart(product);
    setToastMessage(`${product.name} added to cart!`);
    setShowToast(true);

  };

  return (
    <li key={product.id} className={styles['product-list__item']}>
      <Link to={`/product/${product.id}`} className={styles['product-link']}>
        <img src={product.image} alt={product.name} className={styles['product-list__image']} />
        <h2 className={styles['product-list__title']}>{product.name}</h2>
        <p className={styles['product-list__price']}>{formatCurrency(product.price)}</p>
        <p className={styles['product-list__stock']}>
          {product.stock > 0 ? 'In stock' : 'Out of stock'}
        </p>
        {product.stock > 0 && (
          <Button className={styles['product-list__button']} onClick={(e) => handleAddToCart(e, product)}>
            Add to Cart
          </Button>
        )}
      </Link>
      {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} />}
                <Confetti trigger={showToast} />

    </li>
  );
}

export default ProductTile;

