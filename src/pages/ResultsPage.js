import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import styles from './ResultsPage.module.css';

const ResultsPage = () => {
  const location = useLocation();
  const { finalScore, totalQuestions } = location.state || { finalScore: 0, totalQuestions: 10 }; // Default values
  // Calculate correct answers based on simple scoring used in prototype
  const correctAnswers = finalScore / 100;

  return (
    <Layout>
      <Card className={styles.resultsCard}>
        <h2>Quiz Complete!</h2>
        <div className={styles.scoreDisplay}>
            Your Score: <span className={styles.scoreValue}>{finalScore}</span>
        </div>
        <p className={styles.summary}>
            You answered {correctAnswers} out of {totalQuestions} questions correctly.
        </p>
        <div className={styles.actionButtons}>
            <Link to="/leaderboard">
                <Button variant="secondary">View Leaderboard</Button>
            </Link>
            <Link to="/quiz"> {/* In real app, maybe link to home or archive */}
                <Button variant="primary">Play Again (New Quiz)</Button>
            </Link>
        </div>
      </Card>
    </Layout>
  );
};

export default ResultsPage;
