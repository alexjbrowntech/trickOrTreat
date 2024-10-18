import React, { useState } from "react";

const Form = ({ onSubmit }) => {
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
    decorations: "", // Changed to empty string for radio value
    petsAtHome: "", // Changed to empty string for radio value
    sweets: "", // Added sweets to the state
    toys: "", // Added toys to the state
    allergyFriendly: "", // Added allergyFriendly to the state
    wheelchairAccessible: "", // Added wheelchairAccessible to the state
    houseTheme: "", // Added houseTheme to the state
    maxGroupSize: 1, // Added a default value
    notes: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const isTreatField = Object.keys(hostData.treats).includes(name);
      setHostData((prevData) => ({
        ...prevData,
        [isTreatField ? "treats" : "hoursParticipation"]: {
          ...prevData[isTreatField ? "treats" : "hoursParticipation"],
          [name]: checked,
        },
      }));
    } else if (type === "radio") {
      // Set the value of the selected radio button directly
      setHostData((prevData) => ({
        ...prevData,
        [name]: value, // Use name directly to update state
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
    // Pass the form data back to the parent component (App.js)
    onSubmit(hostData);
  };

  return (
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

      {/* House Theme */}
      <div>
        <label htmlFor="houseTheme">House Theme:</label>
        <input
          type="text"
          id="houseTheme"
          name="houseTheme"
          value={hostData.houseTheme}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Sweets */}
      <div>
        <label>Are You Offering Sweets?</label>
        <div>
          <label htmlFor="sweetsYes">
            <input
              type="radio"
              id="sweetsYes"
              name="sweets"
              value="yes"
              checked={hostData.sweets === "yes"}
              onChange={handleInputChange}
            />
            Yes
          </label>
        </div>
        <div>
          <label htmlFor="sweetsNo">
            <input
              type="radio"
              id="sweetsNo"
              name="sweets"
              value="no"
              checked={hostData.sweets === "no"}
              onChange={handleInputChange}
            />
            No
          </label>
        </div>
      </div>

      {/* Toys */}
      <div>
        <label>Are You Offering Toys?</label>
        <div>
          <label htmlFor="toysYes">
            <input
              type="radio"
              id="toysYes"
              name="toys"
              value="yes"
              checked={hostData.toys === "yes"}
              onChange={handleInputChange}
            />
            Yes
          </label>
        </div>
        <div>
          <label htmlFor="toysNo">
            <input
              type="radio"
              id="toysNo"
              name="toys"
              value="no"
              checked={hostData.toys === "no"}
              onChange={handleInputChange}
            />
            No
          </label>
        </div>
      </div>

      {/* Allergy Friendly */}
      <div>
        <label>Are the Treats Allergy Friendly?</label>
        <div>
          <label htmlFor="allergyFriendlyYes">
            <input
              type="radio"
              id="allergyFriendlyYes"
              name="allergyFriendly"
              value="yes"
              checked={hostData.allergyFriendly === "yes"}
              onChange={handleInputChange}
            />
            Yes
          </label>
        </div>
        <div>
          <label htmlFor="allergyFriendlyNo">
            <input
              type="radio"
              id="allergyFriendlyNo"
              name="allergyFriendly"
              value="no"
              checked={hostData.allergyFriendly === "no"}
              onChange={handleInputChange}
            />
            No
          </label>
        </div>
      </div>

      {/* Wheelchair Accessible */}
      <div>
        <label>Are you wheelchair accessible?</label>
        <div>
          <label htmlFor="wheelchairAccessibleYes">
            <input
              type="radio"
              id="wheelchairAccessibleYes"
              name="wheelchairAccessible"
              value="yes"
              checked={hostData.wheelchairAccessible === "yes"}
              onChange={handleInputChange}
            />
            Yes
          </label>
        </div>
        <div>
          <label htmlFor="wheelchairAccessibleNo">
            <input
              type="radio"
              id="wheelchairAccessibleNo"
              name="wheelchairAccessible"
              value="no"
              checked={hostData.wheelchairAccessible === "no"}
              onChange={handleInputChange}
            />
            No
          </label>
        </div>
      </div>

      {/* Decorations */}
      <div>
        <label>Will The House Be Decorated?</label>
        <div>
          <label htmlFor="decorationsYes">
            <input
              type="radio"
              id="decorationsYes"
              name="decorations"
              value="yes"
              checked={hostData.decorations === "yes"}
              onChange={handleInputChange}
            />
            Yes
          </label>
        </div>
        <div>
          <label htmlFor="decorationsNo">
            <input
              type="radio"
              id="decorationsNo"
              name="decorations"
              value="no"
              checked={hostData.decorations === "no"}
              onChange={handleInputChange}
            />
            No
          </label>
        </div>
      </div>

      {/* Pets At Home */}
      <div>
        <label>Pets At Home?</label>
        <div>
          <label htmlFor="petsAtHomeYes">
            <input
              type="radio"
              id="petsAtHomeYes"
              name="petsAtHome"
              value="yes"
              checked={hostData.petsAtHome === "yes"}
              onChange={handleInputChange}
            />
            Yes
          </label>
        </div>
        <div>
          <label htmlFor="petsAtHomeNo">
            <input
              type="radio"
              id="petsAtHomeNo"
              name="petsAtHome"
              value="no"
              checked={hostData.petsAtHome === "no"}
              onChange={handleInputChange}
            />
            No
          </label>
        </div>
      </div>

      {/* Pets Welcome (Visitors) */}
      <div>
        <label>Are Pets Welcome (Visitors)?</label>
        <div>
          <label htmlFor="petsWelcomeYes">
            <input
              type="radio"
              id="petsWelcomeYes"
              name="petsWelcome"
              value="yes"
              checked={hostData.petsWelcome === "yes"}
              onChange={handleInputChange}
            />
            Yes
          </label>
        </div>
        <div>
          <label htmlFor="petsWelcomeNo">
            <input
              type="radio"
              id="petsWelcomeNo"
              name="petsWelcome"
              value="no"
              checked={hostData.petsWelcome === "no"}
              onChange={handleInputChange}
            />
            No
          </label>
        </div>
      </div>

      {/* Max Group Size */}
      <div>
        <label htmlFor="maxGroupSize">Max Group Size:</label>
        <input
          type="number"
          id="maxGroupSize"
          name="maxGroupSize"
          value={hostData.maxGroupSize}
          onChange={handleInputChange}
          min="1"
          max="99"
          required
        />
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
  );
};

export default Form;
