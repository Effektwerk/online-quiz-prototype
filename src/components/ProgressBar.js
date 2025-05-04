import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className={styles.progressBarContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
