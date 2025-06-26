import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Survey.css"

function Survey() {
  const questions = [
    { id: 1, text: "How satisfied are you with our products?", type: "rating", scale: 5 },
    { id: 2, text: "How fair are the prices compared to similar retailers?", type: "rating", scale: 5 },
    { id: 3, text: "How satisfied are you with the value for money of your purchase?", type: "rating", scale: 5 },
    { id: 4, text: "How likely would you recommend us to friends and family?", type: "rating", scale: 10 },
    { id: 5, text: "What could we do to improve our service?", type: "text" }
  ];

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

  function handleAnswer(value) {
    const qId = questions[index].id;
    setAnswers({ ...answers, [qId]: value });
  }

  function next() {
    if (index < questions.length - 1) setIndex(index + 1);
  }

  function prev() {
    if (index > 0) setIndex(index - 1);
  }

  async function submit() {
    const sessionId = Date.now().toString();
    try {
      await axios.post('http://localhost:5000/api/survey', {
        sessionId,
        answers,
        status: 'COMPLETED'
      });
      navigate('/thankyou');
      alert("Survey submitted. Thank you!");
    } catch (e) {
      alert("Failed to submit.");
    }
  }

  const q = questions[index];
  const value = answers[q.id] || "";

  return (
    <div className='maindiv'>
      <h3 id='que-count'>Question {index + 1} of {questions.length}</h3>
      <p id='para'>{q.text}</p>

      {q.type === "rating" ? (
        <div className='rating'>
          {[...Array(q.scale)].map((_, i) => (
            <button key={i} onClick={() => handleAnswer(i + 1)}>{i + 1}</button>
          ))}
        </div>
      ) : (
        <textarea id='text-area'
          rows="3"
          cols="40"
          value={value}
          onChange={(e) => handleAnswer(e.target.value)}
        />
      )}

      <div className='btn'>
        <button id='prev' onClick={prev} disabled={index === 0}>Previous</button>
        <button id='next' onClick={next} disabled={index === questions.length - 1}>Next</button>
        {index === questions.length - 1 && <button id='submit' onClick={submit}>Submit</button>}
      </div>
    </div>
  );
}

export default Survey;
