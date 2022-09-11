import React from "react";
import ContentItem from "./ContentItem";

function CourseContent({ content, sectionsCount, lecturesCount, totalLength }) {
  const getContent = () => {
    return content.map((item) => {
      return <ContentItem item={item} key={item}/>;
    });
  };

  return (
    <>
      <h6>Course Content</h6>
      <div className="content">
        <span className="contentCount">
          {sectionsCount} sectios - {lecturesCount} lectures - {totalLength}{" "}
          total length
        </span>
      </div>
      <div className="courseContent">{getContent()}</div>
    </>
  );
}

export default CourseContent;
