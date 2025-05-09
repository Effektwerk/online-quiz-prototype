import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, variant = 'primary', disabled = false, className = '' }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
