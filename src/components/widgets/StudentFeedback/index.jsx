import React from "react";
import ProgressBar from "../ProgressBar";

function StudentFeedback({ feedbacks, rating }) {
  const createProgressBars = () => {
    let id = 1;
    return feedbacks.map((feedback) => {
      return <ProgressBar progress={feedback} key={id++} />;
    });
  };

  return (
    <>
      <h6>Student feedback</h6>
      <div className="feedbackUpperDiv">
        <div className="studentFbCourseRating">
          <p className="par1StudentFb">{rating}</p>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <p className="par2StudentFb">Course Rating</p>
        </div>
        <div className="ratingsProgressBars">{createProgressBars()}</div>
      </div>
    </>
  );
}

export default StudentFeedback;
