import "./card-styles.css";

const Card = ({ cardData }) => {
  console.log(cardData);
  if (!cardData) {
    return <div>Select a point on the map to see details</div>;
  }

  const displayYesNo = (value) => (value ? "Yes" : "No");

  return (
    <div className="card">
      <h2>{cardData.name}</h2>

  
      <div className="card-section">
   
      </div>


      <div className="card-section">
        <h3>Visit Me</h3>
        {Object.entries(cardData.hoursParticipation).map(
          ([timeSlot, participates]) => (
            <p key={timeSlot}>
              <strong>{timeSlot}:</strong> {displayYesNo(participates)}
            </p>
          )
        )}
      </div>

      <div className="card-section">
        <p>
          <strong>🍬Sweets:</strong> {displayYesNo(cardData.treats.candy)}{" "}
          <strong>🍫Chocolate:</strong>{" "}
          {displayYesNo(cardData.treats.chocolate)} <strong>🎁Toys:</strong>{" "}
          {displayYesNo(cardData.treats.toys)}
        </p>
        <p></p>
        <p></p>
      </div>

 
      <div className="card-section">
        <p>
          🥜<strong>Allergy Information: </strong>
          {cardData.allergyInfo}
        </p>
      </div>

 
      <div className="card-section">
        <p>
          <strong>🎃Decorations:</strong>{" "}
          {displayYesNo(cardData.decorations.yes)}
        </p>
      </div>

      {cardData.notes && (
        <div className="card-section">
          <p>
            <strong>📝Notes </strong>
            {cardData.notes}
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
