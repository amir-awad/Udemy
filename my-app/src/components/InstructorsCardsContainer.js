import React from "react";
import InstructorCard from "./InstructorCard";

function InstructorsCardsContainer({ instructors }) {
  const createInstructorCard = () => {
    return instructors.map((instructor) => {
      return <InstructorCard instructor={instructor} key={instructor.name} />;
    });
  };

  return (
    <>
      <h6>Instructors</h6>
      <div className="courseInstructors">{createInstructorCard()}</div>
    </>
  );
}

export default InstructorsCardsContainer;
