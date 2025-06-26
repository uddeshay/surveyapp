import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Final.css"

function Final() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, [navigate]);

  return (
    <div className='final-container'>
      <h2 id='head1'>Thank you for your feedback!</h2>
      <p id='para1'>You will be redirected to the home page shortly...</p>
    </div>
  );
}

export default Final;
