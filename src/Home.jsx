import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToMap = () => {
    navigate('/map');
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button>Go to Form</button>
      <br/>
      <button onClick={goToMap}>Go to Map</button>
      
    </div>
  );
};

export default Home;
