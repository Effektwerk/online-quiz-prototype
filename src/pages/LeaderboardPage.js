import React from 'react';
import { Link } from 'react-router-dom';
import { leaderboardData } from '../data/mockLeaderboard';
import Layout from '../components/Layout';
import Card from '../components/Card';
import styles from './LeaderboardPage.module.css';
import Button from '../components/Button';

const LeaderboardPage = () => {
  return (
    <Layout>
      <Card className={styles.leaderboardCard}>
        <h2>Daily Leaderboard</h2>
        <p>Top scores for today's quiz.</p>
        <table className={styles.leaderboardTable}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry) => (
              <tr key={entry.rank}>
                <td>{entry.rank}</td>
                <td>{entry.username}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
         <div className={styles.navButtons}>
             <Link to="/">
                <Button variant="secondary">Back to Home</Button>
             </Link>
            {/* Add buttons for Weekly/Monthly later */}
         </div>
      </Card>
    </Layout>
  );
};

export default LeaderboardPage;
