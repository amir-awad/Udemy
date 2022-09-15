import React from "react";

function CoursesSection(props) {
  return (
    <>
      <h1>{props.title}</h1>

      <p>{props.description}</p>
      <button className="explore-button">Explore {props.courseName}</button>
    </>
  );
}

export default CoursesSection;
