import { formatCurrency } from '@demorepo/utils';
import styles from './ProductList.module.css'

export default function ProductList({ products }) {
  return (
    <ul className={styles['product-list']}>
      {products.map(product => (
        <li key={product.id} className={styles['product-list__item']}>
          <img src={product.image} alt={product.name} className={styles['product-list__image']} />
          <h2 className={styles['product-list__title']}>{product.name}</h2>
          <p className={styles['product-list__price']}>{formatCurrency(product.price)}</p>
          <p className={styles['product-list__stock']}>
            {product.stock > 0 ? 'In stock' : 'Out of stock'}
          </p>
        </li>
      ))}
    </ul>
  );
}

