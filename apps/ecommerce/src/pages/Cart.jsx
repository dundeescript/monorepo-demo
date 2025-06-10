import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import { formatCurrency } from '@demorepo/utils';
import styles from './Cart.module.css';
import { Button, Confetti, Toast } from '@demorepo/ui';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState({});
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleQuantityChange = (id, value) => {
    setQuantity(prevState => ({ ...prevState, [id]: value }));
    updateQuantity(id, value);
    setToastMessage(`Quantity changed in cart!`);
    setShowToast(true);
  };

  const handleRemoveFromCart = (id) => {
    if (confirm('Are you sure you want to remove this item?')) {
      removeFromCart(id);
      setToastMessage(`Item removed from cart!`);
      setShowToast(true);
    }
  }

  return (
    <div className={styles.cart}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className={styles.empty}>Cart is empty</p>
      ) : (
        <div className={styles.items}>
          {cart.map((item, index) => (
            <div key={index} className={styles.item}>
              <img src={item.image} alt={item.name} width={100} />
              <h4>{item.name}</h4>
              <p>
                {item.quantity} x {formatCurrency(item.price)}
              </p>
              <div className={styles.quantity}>
                <button
                  className={styles['quantity-button']}
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity[item.id] || item.quantity}
                  onChange={e => handleQuantityChange(item.id, Number(e.target.value))}
                  className={styles['quantity-input']}
                />
                <button
                  className={styles['quantity-button']}
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <Button variant="error" onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </Button>
            </div>
          ))}
          <div className={styles.summary}>
            <p>Subtotal: {formatCurrency(subtotal)}</p>
            <p>Shipping: {formatCurrency(shipping)}</p>
            <p>Total: {formatCurrency(total)}</p>
            </div>
            
           
          </div>
      )}

       {showToast && (
        <>
          <Toast
            message={toastMessage}
            onClose={() => setShowToast(false)}
            type="success"
            duration={3000}
          />
          <Confetti trigger={showToast} />
        </>
        )}
    </div>
  );
}

export default Cart;

