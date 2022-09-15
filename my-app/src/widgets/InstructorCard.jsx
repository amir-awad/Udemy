import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAward,
  faUsers,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { InstructorDescription } from "./Description";

function InstructorCard({ instructor }) {
  return (
    <>
      <a
        className="instructorName"
        href="https://www.udemy.com/user/avinashjain5/"
      >
        {instructor.name}
      </a>
      <p className="instructorIntro">{instructor.Intro}</p>
      <div className="instructorOverview">
        <div>
          <a href="https://www.udemy.com/user/avinashjain5/">
            <img
              className="instructorImage"
              src={instructor.Image}
              alt={"Instructor " + instructor.name + " image"}
            />
          </a>
          <ul className="instructorRatings">
            <li className="instructorLiClass">
              <FontAwesomeIcon className="fontAwesome" icon={faStar} />
              <span>{instructor.Rating + " Instructor Rating"}</span>
            </li>
            <li className="instructorLiClass">
              <FontAwesomeIcon className="fontAwesome" icon={faAward} />
              <span>{instructor.reviewsNumber + " Reviews"}</span>
            </li>
            <li className="instructorLiClass">
              <FontAwesomeIcon className="fontAwesome" icon={faUsers} />
              <span>{instructor.studentsNumber + " Students"}</span>
            </li>
            <li className="instructorLiClass">
              <FontAwesomeIcon className="faCirclePlay " icon={faCirclePlay} />
              <span>{instructor.coursesNumber + " Courses"}</span>
            </li>
          </ul>
        </div>
      </div>
      <InstructorDescription
        className="instructorDesc"
        description={instructor.description}
      />
    </>
  );
}

export default InstructorCard;
