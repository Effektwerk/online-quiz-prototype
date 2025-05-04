import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout'; // Assume Layout provides basic structure/header
import Card from '../components/Card';
import Button from '../components/Button';
import styles from './HomePage.module.css'; // You'll need to create this CSS module

const HomePage = () => {
  const today = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD format

  return (
    <Layout>
      <div className={styles.hero}>
        <h1>Online-Quiz.com</h1>
        <p>Your daily dose of general knowledge.</p>
      </div>
      <Card className={styles.quizCard}>
        <h2>Quiz of the Day</h2>
        <p>Ready for today's 10 questions? ({today})</p>
        <img src="https://images.unsplash.com/photo-1517498401102-75054e94571c?q=80&w=600&auto=format&fit=crop" alt="Abstract brain teaser" className={styles.heroImage} />
        <Link to="/quiz" style={{ textDecoration: 'none' }}>
          <Button variant="primary" className={styles.startButton}>Start Today's Quiz</Button>
        </Link>
        <div className={styles.navLinks}>
            <Link to="/leaderboard">View Leaderboard</Link>
            {/* Add Link to Archive later */}
        </div>
      </Card>
    </Layout>
  );
};

export default HomePage;
