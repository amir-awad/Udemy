import React from "react";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  return (
    <Link to={"/courses/" + props.courseId} className="link">
      <div className="courseCard">
        <img src={props.image} alt="courseImage"></img>
        <p className="courseTitle">{props.title}</p>
        <p className="coursePresenter">{props.presenter}</p>
        <span className="courseRating">{props.rate}</span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <p className="coursePrice">E£{props.price}</p>
      </div>
    </Link>
  );
};

export default CourseCard;
