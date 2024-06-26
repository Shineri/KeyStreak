import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Test.css'; // Import your CSS file for TestForm styling

const TestForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [timeDuration, setTimeDuration] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Start the test by setting startTest to true
    if (selectedOption && timeDuration) {
      navigate('/TestTakingPage');
    } else {
      alert("Please select both a test option and a time duration.");
    }
  };

  return (
    <div className="test-form-container">
      <form className="test-form" onSubmit={handleSubmit}>
        <h2>Test Options</h2>
        <label>
          <input
            type="radio"
            value="camelCase"
            checked={selectedOption === 'camelCase'}
            onChange={() => setSelectedOption('camelCase')}
          />
          Camel Case
        </label>
        <label>
          <input
            type="radio"
            value="lowercase"
            checked={selectedOption === 'lowercase'}
            onChange={() => setSelectedOption('lowercase')}
          />
          Lowercase
        </label>
        <label>
          <input
            type="radio"
            value="punctuation"
            checked={selectedOption === 'punctuation'}
            onChange={() => setSelectedOption('punctuation')}
          />
          Punctuation
        </label>
        <label>
          <input
            type="radio"
            value="alphanumeric"
            checked={selectedOption === 'alphanumeric'}
            onChange={() => setSelectedOption('alphanumeric')}
          />
          Alphanumeric
        </label>
        <div className="time-duration">
          <label htmlFor="timeDuration">Choose Time Duration:</label>
          <select
            id="timeDuration"
            value={timeDuration}
            onChange={(e) => setTimeDuration(e.target.value)}
          >
            <option value="">Select Duration</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="20">20 minutes</option>
          </select>
        </div>
        <button type="button" onClick={handleSubmit}>
          Start Test
        </button>
      </form>
    </div>
  );
};

export default TestForm;
