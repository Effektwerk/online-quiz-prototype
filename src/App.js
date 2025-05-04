import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import LeaderboardPage from './pages/LeaderboardPage';
import './index.css'; // Import global styles

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
