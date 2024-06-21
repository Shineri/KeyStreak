import React, { useState, useEffect } from 'react';
import './Typingpractice.css';

const sampleText = "The quick brown fox jumps over the lazy dog.";

const TypingPractice = () => {
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (!startTime) {
      setStartTime(Date.now());
    }

    setUserInput(value);

    if (value === sampleText) {
      const endTime = Date.now();
      const timeDiff = (endTime - startTime) / 1000 / 60; // time difference in minutes
      const wordCount = sampleText.split(" ").length;
      setWpm(Math.round(wordCount / timeDiff));
    }
  };

  const reset = () => {
    setUserInput("");
    setStartTime(null);
    setWpm(0);
  };

  const getAccuracy = () => {
    const correctChars = sampleText.slice(0, userInput.length);
    let correctCount = 0;

    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === correctChars[i]) {
        correctCount++;
      }
    }

    return ((correctCount / sampleText.length) * 100).toFixed(2);
  };

  return (
    <div className="container">
      <div className="typing-box">
        <h2>Typing Practice</h2>
        <p>{sampleText}</p>
        <textarea
          rows="4"
          value={userInput}
          onChange={handleInputChange}
        ></textarea>
        <div className="stats">
          <p>WPM: {wpm}</p>
          <p>Accuracy: {getAccuracy()}%</p>
        </div>
        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default TypingPractice;
