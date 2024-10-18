import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MapComp from "./MapComp";
// import { storedData } from "./data";
import React, { useState } from "react";
import Form from "./components/Form"; // Ensure the path is correct
import "./App.css";

const App = () => {
  const [hostData, setHostData] = useState({
    name: "",
    address: "",
    treats: {
      candy: false,
      chocolate: false,
      toys: false,
    },
    allergyInfo: "",
    hoursParticipation: {
      "4pm-6pm": false,
      "6pm-8pm": false,
      "8pm-10pm": false,
    },
    decorations: "", // Ensure this matches the Form.js field
    petsAtHome: "", // Ensure this matches the Form.js field
    sweets: "", // Added to match Form.js
    toys: "", // Added to match Form.js
    allergyFriendly: "", // Added to match Form.js
    wheelchairAccessible: "", // Added to match Form.js
    houseTheme: "", // Added to match Form.js
    maxGroupSize: 1, // Default value
    notes: "",
  });

  // Handle form submission
  const handleSubmit = (data) => {
    // Update the state with the submitted data from Form.js
    setHostData(data);
    console.log("Form Submitted: ", data);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapComp />} />
        <Route path="/form" element={<Form onSubmit={handleSubmit} />} />
      </Routes>
    </Router>
  );
  // State for managing form input values

  // Handle form submission

  // return (
  //   <div>
  //     <h1>Halloween Treat Hosts Sign-Up</h1>
  //     <Form onSubmit={handleSubmit} /> {/* Connect Form component */}
  //     {/* Optionally, you can display submitted data here */}
  //     <pre>{JSON.stringify(hostData, null, 2)}</pre> {/* Display form data for testing */}
  //   </div>
  // );
};

export default App;
