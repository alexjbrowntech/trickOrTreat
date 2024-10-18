import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const goToMap = () => {
    navigate('/map');
  };


  return (
    <div>
      <h1>Trick or Treat Tracker</h1>
      <h3>Worried about where to go on Halloween? Or who will come to your door? Tell your neighbourhood you're ready to welcome some trick-or-treaters here!</h3>
      <p>Want to add your house to the map?</p>
      <button>Go to Form</button>
      <br/>
      <p>Want to plan your route?</p>
      <button onClick={goToMap}>Go to Map</button>
      
    </div>
  );
};

export default Home;
