import React from "react";
import LoadingIcons from "react-loading-icons";

const LoadingCourseCard = (props) => {
  return (
    <div className="loadingCourseCard">
      <LoadingIcons.Oval stroke="black" speed={0.8} />
    </div>
  );
};

export default LoadingCourseCard;
