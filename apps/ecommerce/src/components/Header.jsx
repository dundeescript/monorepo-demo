import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

export default function Header() {
  const location = useLocation();
  const { cart } = useContext(CartContext);

  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}><Link to="/" className={styles.link}>Frontend</Link></h1>
      <nav className={styles.nav}>
        <Link to="/" className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}>Home</Link>
        <Link to="/products" className={`${styles.link} ${location.pathname === '/products' ? styles.active : ''}`}>Products</Link>
        <Link to="/cart" className={`${styles.link} ${location.pathname === '/cart' ? styles.active : ''}`}>
          Cart ({cartQuantity})
        </Link>
      </nav>
    </header>
  );
}

