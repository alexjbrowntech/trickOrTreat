import React, { useState } from "react";

// Main App Component
const App = () => {
  // State for managing form input values
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
    notes: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      // Handling both treats and hoursParticipation checklists
      const isTreatField = Object.keys(hostData.treats).includes(name);
      setHostData((prevData) => ({
        ...prevData,
        [isTreatField ? "treats" : "hoursParticipation"]: {
          ...prevData[isTreatField ? "treats" : "hoursParticipation"],
          [name]: checked,
        },
      }));
    } else {
      setHostData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form data (e.g., send it to a backend or update a list)
    console.log("Form Submitted: ", hostData);
  };

  return (
    <div>
      <h1>Halloween Treat Hosts Sign-Up</h1>
      <form onSubmit={handleSubmit}>
        {/* Host Name */}
        <div>
          <label htmlFor="name">Host Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={hostData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Host Address */}
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={hostData.address}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Treat Types */}
        <div>
          <label>Treat Types:</label>
          <div>
            <label htmlFor="candy">
              <input
                type="checkbox"
                id="candy"
                name="candy"
                checked={hostData.treats.candy}
                onChange={handleInputChange}
              />
              Candy
            </label>
          </div>
          <div>
            <label htmlFor="chocolate">
              <input
                type="checkbox"
                id="chocolate"
                name="chocolate"
                checked={hostData.treats.chocolate}
                onChange={handleInputChange}
              />
              Chocolate
            </label>
          </div>
          <div>
            <label htmlFor="toys">
              <input
                type="checkbox"
                id="toys"
                name="toys"
                checked={hostData.treats.toys}
                onChange={handleInputChange}
              />
              Toys
            </label>
          </div>
        </div>

        {/* Allergy Info */}
        <div>
          <label htmlFor="allergyInfo">Allergy Info (if any):</label>
          <input
            type="text"
            id="allergyInfo"
            name="allergyInfo"
            value={hostData.allergyInfo}
            onChange={handleInputChange}
          />
        </div>

        {/* Hours of Participation */}
        <div>
          <label>Hours of Participation:</label>
          <div>
            <label htmlFor="4pm-6pm">
              <input
                type="checkbox"
                id="4pm-6pm"
                name="4pm-6pm"
                checked={hostData.hoursParticipation["4pm-6pm"]}
                onChange={handleInputChange}
              />
              4 PM - 6 PM
            </label>
          </div>
          <div>
            <label htmlFor="6pm-8pm">
              <input
                type="checkbox"
                id="6pm-8pm"
                name="6pm-8pm"
                checked={hostData.hoursParticipation["6pm-8pm"]}
                onChange={handleInputChange}
              />
              6 PM - 8 PM
            </label>
          </div>
          <div>
            <label htmlFor="8pm-10pm">
              <input
                type="checkbox"
                id="8pm-10pm"
                name="8pm-10pm"
                checked={hostData.hoursParticipation["8pm-10pm"]}
                onChange={handleInputChange}
              />
              8 PM - 10 PM
            </label>
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label htmlFor="notes">Additional Notes:</label>
          <textarea
            id="notes"
            name="notes"
            value={hostData.notes}
            onChange={handleInputChange}
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
