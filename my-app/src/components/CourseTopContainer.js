import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCircleExclamation,
  faGlobe,
  faClosedCaptioning,
} from "@fortawesome/free-solid-svg-icons";
function CourseTopContainer({ course }) {
  return (
    <div className="topContainer">
      <div>
        <a
          className="landingTopMenu"
          href="https://www.udemy.com/courses/development/"
          aria-disabled="true"
        >
          Development
        </a>
        <FontAwesomeIcon
          className="fontAwesome"
          icon={faChevronRight}
          color="#fff"
        />
        <a
          className="landingTopMenu"
          href="https://www.udemy.com/courses/development/programming-languages/"
        >
          Programming Languages
        </a>
        <FontAwesomeIcon
          className="fontAwesome"
          icon={faChevronRight}
          color="#fff"
        />
        <a
          className="landingTopMenu"
          href="https://www.udemy.com/topic/python/"
        >
          Python
        </a>
      </div>
      <h5 className="courseTopContainerTitle">{course.title}</h5>
      <div className="courseIntroduction">{course.Introduction}</div>
      <span className="courseRating">{course.rate}</span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="ratingCount">
        {"(" + course.ratingCount + " ratings) "}
      </span>
      <span className="studentCount">{course.enrollCount} students</span>
      <p className="courseInstructor">
        Created by{" "}
        <a
          className="instructor"
          href={"https://www.udemy.com/course/pythonforbeginners/#instructor-1"}
        >
          {course.instructor[0].name}
        </a>
      </p>
      <FontAwesomeIcon
        className="fontAwesome"
        icon={faCircleExclamation}
        color="#fff"
      />
      <span className="lastUpdate">Last updates {course.lastUpdate}</span>
      <span className="courseGlobe">
        <FontAwesomeIcon className="fontAwesome " icon={faGlobe} />{" "}
        {course.globe}
      </span>
      <span className="courseCaptioning">
        <FontAwesomeIcon className="fontAwesome" icon={faClosedCaptioning} />{" "}
        {course.Captioning}
      </span>
    </div>
  );
}

export default CourseTopContainer;
