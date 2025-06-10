import React, { useEffect, useState } from 'react';
import styles from './Toast.module.css';

// Toast component for displaying temporary notifications
// Props:
// - message: String, the notification text
// - type: 'success' | 'error' | 'warning' | 'info' (default: 'info')
// - duration: Number, milliseconds before auto-dismiss (default: 3000)
// - onClose: Function, callback when toast is closed
const Toast = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Handle auto-dismiss after duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  // Handle manual close
  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  // Map type to CSS class for styling
  const toastClass = {
    success: styles.success,
    error: styles.error,
    warning: styles.warning,
    info: styles.info,
  }[type] || styles.info;

  if (!isVisible) return null;

  return (
    <div
      className={`${styles.toast} ${toastClass}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <span className={styles.message}>{message}</span>
      <button
        className={styles.closeButton}
        onClick={handleClose}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
};

export { Toast };