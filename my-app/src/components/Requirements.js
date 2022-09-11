import React from "react";

function Requirements({ requirements }) {
  const getRequirements = () => {
    return requirements.map((req) => {
        return <li key={req}>{req}</li>
    });
  };
  return (
    <div className="requirements">
      <h3>Requirements</h3>
      <ul>{getRequirements()}</ul>
    </div>
  );
}

export default Requirements;
