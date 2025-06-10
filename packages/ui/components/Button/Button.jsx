import styles from './Button.module.css';

export const Button = ({ children, onClick, variant='default', type="button" }) => (
  <button type={type} onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
    {children}
  </button>
);

