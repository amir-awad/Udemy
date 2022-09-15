import React from "react";
import { CourseSidebarCard } from "../CourseCard";

function CourseSidebarContainer({ course }) {
  return (
    <div className="courseSideBarContainer">
      <div className="courseSideBar">
        <CourseSidebarCard course={course}></CourseSidebarCard>
      </div>
      <div className="courseSideBarBottomDiv">
        <div className="courseSideBarBottomContent">
          <h5>Training 5 or more people?</h5>
          <p className="courseSideBarBottomDivPar">
            Get your team access to 17,000+ top Udemy courses anytime, anywhere.
          </p>
        </div>
        <button className="tryUdemyButton courseSidebarCardButton">
          Try Udemy Business
        </button>
      </div>
    </div>
  );
}

export default CourseSidebarContainer;
