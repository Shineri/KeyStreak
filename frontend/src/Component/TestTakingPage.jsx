import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Test.css';

const TestTakingPage = () => {
  const { selectedOption, timeDuration } = useParams();
  const [testStarted, setTestStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(parseInt(timeDuration) * 60); // Convert minutes to seconds
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    startTest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startTest = () => {
    setTestStarted(true);
  };

  // Countdown timer effect
  useEffect(() => {
    let timer;
    if (testStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      finishTest();
    }

    return () => clearInterval(timer);
  }, [testStarted, timeLeft]);

  const finishTest = () => {
    setTestStarted(false);
    setIsTimeUp(true);
    // Optionally, submit test results or perform any final actions
    navigate('/test-results'); // Navigate to results page or wherever needed
  };

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission of user's answer
    console.log('User answer:', userAnswer);
    // Optionally, you can validate or process the user's answer here
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="test-taking-page">
      <h2>Test</h2>
      <div className="timer">Time Left: {formatTime(timeLeft)}</div>
      {isTimeUp ? (
        <p>Time's up! Test has ended.</p>
      ) : (
        <div className="test-running">
          <h3>Test Content for {selectedOption}</h3>
          {/* Display test content based on selectedOption */}
          <div className="paragraph-box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis nisi, interdum sed rutrum sed,
              placerat in magna. Nulla vel dapibus enim. Phasellus sollicitudin risus et quam auctor ultrices. Nunc
              condimentum velit sed arcu cursus, quis bibendum dolor fermentum. Vestibulum nec risus ac nunc semper
              r dui eros nec justo.
              Proin ultricies id justo id blandit. Nam condimentum consectetur tristique.
            </p>
          </div>
          <form className="answer-form" onSubmit={handleSubmit}>
            <label htmlFor="userAnswer">Your Answer:</label>
            <input
              type="text"
              id="userAnswer"
              value={userAnswer}
              onChange={handleAnswerChange}
              required
            />
            <button type="submit">Submit Answer</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TestTakingPage;
