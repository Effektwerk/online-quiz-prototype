import React from 'react';
import styles from './Layout.module.css'; // If using CSS Modules

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1>Online-Quiz.com</h1> {/* Simple header */}
         <nav>
             {/* Add optional nav later */}
         </nav>
      </header>
      <main className={styles.mainContent}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>© 2025 Online-Quiz.com</p>
      </footer>
    </div>
  );
};

export default Layout;
