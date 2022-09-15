import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
function CourseOverview({ overview }) {
  const courseOutcomes = () => {
    return overview.map((outcome) => {
      return (
        <li key={outcome} className="outcomeItem">
          <div>
            <FontAwesomeIcon className="checkIcon" icon={faCheck} />
            <span>{outcome}</span>
          </div>
        </li>
      );
    });
  };

  return (
    <div className="courseOutcomes">
      <h4>What you'll learn</h4>
      <ul className="outcomesList">{courseOutcomes()}</ul>
    </div>
  );
}

export default CourseOverview;
