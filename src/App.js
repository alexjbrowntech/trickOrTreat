import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MapComp from "./MapComp";
import Form from "./components/Form"; //
import "./App.css";

const App = () => {
  const handleSubmit = (data) => {
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
};

export default App;
