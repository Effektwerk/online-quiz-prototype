import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizData as loadedQuizData } from '../data/mockQuiz';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import styles from './QuizPage.module.css';

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const navigate = useNavigate();

  const quizData = loadedQuizData;
  const currentQuestion = quizData.questions[currentQuestionIndex];

  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [currentQuestionIndex]);

  const handleAnswerSelect = (index) => {
    if (isAnswered) return;

    setSelectedAnswer(index);
    setIsAnswered(true);
    let currentScore = score;

    if (index === currentQuestion.correct_answer_index) {
      currentScore += 100; // Add score immediately for navigation state
      setScore(currentScore);
    }

    setTimeout(() => {
      if (currentQuestionIndex < quizData.questions.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      } else {
        navigate('/results', { state: { finalScore: currentScore, totalQuestions: quizData.questions.length } });
      }
    }, 1200); // Delay to show feedback
  };

  const getOptionStyle = (index) => {
    if (!isAnswered) return styles.optionButton; // Default interactive style

    if (index === currentQuestion.correct_answer_index) {
      return `${styles.optionButton} ${styles.correct}`; // Correct answer style
    }
    if (index === selectedAnswer) {
      return `${styles.optionButton} ${styles.incorrect}`; // Selected wrong answer style
    }
    return `${styles.optionButton} ${styles.disabled}`; // Other non-selected options
  };

  return (
    <Layout>
      <Card className={styles.quizContainer}>
        <ProgressBar current={currentQuestionIndex + 1} total={quizData.questions.length} />
        <h2 className={styles.questionNumber}>Question {currentQuestionIndex + 1} of {quizData.questions.length}</h2>

        {currentQuestion.image_url && (
          <img src={currentQuestion.image_url} alt={currentQuestion.image_prompt || "Quiz visual"} className={styles.quizImage} />
        )}

        <p className={styles.questionText}>{currentQuestion.question_text}</p>

        <div className={styles.optionsGrid}>
          {currentQuestion.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={isAnswered}
              className={getOptionStyle(index)}
              // Use Button's internal variant logic OR specific CSS classes like above
            >
              {option}
            </Button>
          ))}
        </div>
         {isAnswered && (
             <p className={`${styles.feedback} ${selectedAnswer === currentQuestion.correct_answer_index ? styles.feedbackCorrect : styles.feedbackIncorrect}`}>
                {selectedAnswer === currentQuestion.correct_answer_index ? 'Correct!' : 'Incorrect!'}
             </p>
        )}
      </Card>
    </Layout>
  );
};

export default QuizPage;
