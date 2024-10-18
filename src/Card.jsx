const Card = ({ selectedPoint }) => {
    if (!selectedPoint) {
      return <div>Select a point on the map to see details</div>;
    }
  
    const displayYesNo = (value) => (value ? "Yes" : "No");

    return (

<div className="card">
      <h2>{selectedPoint.name}</h2>
      
        {/* Theme */}
      <div className="card-section">
        <h2>👻 House Theme: {selectedPoint.theme}</h2>
      </div>

      {/* Image */}
      <div className="card-image">
        <img src={selectedPoint.img} alt={selectedPoint.name} style={{ maxWidth: 350, width: "100%", height: "auto" }} />
      </div>

      {/* Hours of Participation */}
      <div className="card-section">
        <h3>Visit Me</h3>
        {Object.entries(selectedPoint.hoursParticipation).map(([timeSlot, participates]) => (
          <p key={timeSlot}><strong>{timeSlot}:</strong> {displayYesNo(participates)}</p>
        ))}
      </div>


      {/* Treats */}
      <div className="card-section">

        <p><strong>🍬Sweets:</strong> {displayYesNo(selectedPoint.treats.candy)} <strong>🍫Chocolate:</strong> {displayYesNo(selectedPoint.treats.chocolate)} <strong>🎁Toys:</strong> {displayYesNo(selectedPoint.treats.toys)}</p>
        <p></p>
        <p></p>
      </div>

      {/* Allergy Information */}
      <div className="card-section">
        <p>🥜<strong>Allergy Information: </strong>{selectedPoint.allergyInfo}</p>
      </div>


      {/* Decorations */}
      <div className="card-section">
        <p><strong>🎃Decorations:</strong> {displayYesNo(selectedPoint.decorations.yes)}</p>
      </div>

      {/* Notes */}
      {selectedPoint.notes && (
        <div className="card-section">
          <p><strong>📝Notes </strong>{selectedPoint.notes}</p>
        </div>
      )}
    </div>
      
    );
  };

export default Card;