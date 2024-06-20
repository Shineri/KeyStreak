// src/components/TestForm.jsx
// TestForm.jsx

import React, { useState } from 'react';
import './Test.css'; // Import your CSS file for TestForm styling

const TestForm = () => {
  const [camelCase, setCamelCase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [punctuation, setPunctuation] = useState(false);
  const [alphanumeric, setAlphanumeric] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
    console.log({
      camelCase,
      lowercase,
      punctuation,
      alphanumeric,
    });
  };

  return (
    <div className="test-form-container">
      <form className="test-form" onSubmit={handleSubmit}>
        <h2>Test Options</h2>
        <label>
          <input
            type="checkbox"
            checked={camelCase}
            onChange={() => setCamelCase(!camelCase)}
          />
          Camel Case
        </label>
        <p>            </p>
        <label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
          Lowercase
        </label>
        
        <label>
          <input
            type="checkbox"
            checked={punctuation}
            onChange={() => setPunctuation(!punctuation)}
          />
          Punctuation
        </label>
        
        <label>
          <input
            type="checkbox"
            checked={alphanumeric}
            onChange={() => setAlphanumeric(!alphanumeric)}
          />
          Alphanumeric
        </label>
      
        <button type="submit">Start Test</button>
      </form>
    </div>
  );
};

export default TestForm;

