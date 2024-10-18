const Card = ({ selectedPoint }) => {
    if (!selectedPoint) {
      return <div>Select a point on the map to see details</div>;
    }
  
    const displayYesNo = (value) => (value ? "Yes" : "No");

    return (

<div className="card">
      <h2>{selectedPoint.name}</h2>
      
      {/* Image */}
      <div className="card-image">
        <img src={selectedPoint.img} alt={selectedPoint.name} style={{ width: "100%", height: "auto" }} />
      </div>

      {/* Treats */}
      <div className="card-section">
        <h3>Treats</h3>
        <p><strong>Candy:</strong> {displayYesNo(selectedPoint.treats.candy)}</p>
        <p><strong>Chocolate:</strong> {displayYesNo(selectedPoint.treats.chocolate)}</p>
        <p><strong>Toys:</strong> {displayYesNo(selectedPoint.treats.toys)}</p>
      </div>

      {/* Allergy Information */}
      <div className="card-section">
        <h3>Allergy Information</h3>
        <p>{selectedPoint.allergyInfo}</p>
      </div>

      {/* Hours of Participation */}
      <div className="card-section">
        <h3>Hours of Participation</h3>
        {Object.entries(selectedPoint.hoursParticipation).map(([timeSlot, participates]) => (
          <p key={timeSlot}><strong>{timeSlot}:</strong> {displayYesNo(participates)}</p>
        ))}
      </div>

      {/* Decorations */}
      <div className="card-section">
        <h3>Decorations</h3>
        <p><strong>Has decorations:</strong> {displayYesNo(selectedPoint.decorations.yes)}</p>
      </div>

      {/* Notes */}
      {selectedPoint.notes && (
        <div className="card-section">
          <h3>Notes</h3>
          <p>{selectedPoint.notes}</p>
        </div>
      )}
    </div>
      
    );
  };

export default Card;