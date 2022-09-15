import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faFile,
  faDownload,
  faInfinity,
  faMobileScreenButton,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

export { CourseSidebarCard };

function CourseSidebarCard({ course }) {
  return (
    <div className="courseSidebarCard">
      <span className="coursePreview">
        <FontAwesomeIcon className="previewIcon" icon={faCirclePlay} size="8x"/>
        <p className="previewText">Preview this course</p>
      </span>
      <div className="courseSidebarUpperDiv">
        <button className="courseSidebarUpperButton">
          <span className="courseSidebarImageSpan">
            <img
              className="courseSidebarImage"
              src={course.image}
              alt="courseImage"
            ></img>
          </span>
        </button>
      </div>
      <p className="courseSidebarPrice">E£{course.price}</p>
      <button className="addToCartButton courseSidebarCardButton">
        Add to cart
      </button>
      <button className="buyNowButton courseSidebarCardButton">Buy now</button>
      <p className="moneyBack">30-Day Money-Back Guarantee</p>
      <div className="courseSidebarOutlineDiv">
        <span className="courseSidebarOutline">This course includes:</span>
        <ul className="courseSidebarList">
          <li className="courseSidebarLi">
            <FontAwesomeIcon className="fontAwesome" icon={faCirclePlay} />
            <span>{course.hoursCount} hours on-demand video</span>
          </li>
          <li className="courseSidebarLi">
            <FontAwesomeIcon className="fontAwesome" icon={faFile} />
            <span>{course.articlesCount} article</span>
          </li>
          <li className="courseSidebarLi">
            <FontAwesomeIcon className="fontAwesome" icon={faDownload} />
            <span>{course.downloadableResource} downloadable resources</span>
          </li>
          <li className="courseSidebarLi">
            <FontAwesomeIcon className="fontAwesome" icon={faInfinity} />
            <span>Full lifetime access</span>
          </li>
          <li className="courseSidebarLi">
            <FontAwesomeIcon
              className="fontAwesome"
              icon={faMobileScreenButton}
            />
            <span>Access on mobile and TV</span>
          </li>
          <li className="courseSidebarLi">
            <FontAwesomeIcon className="fontAwesome" icon={faTrophy} />
            <span>Certificate of completion</span>
          </li>
        </ul>
      </div>

      <div className="courseSideButtons">
        <button className="courseOptionButton">Share</button>
        <button className="courseOptionButton">Gift this course</button>
        <button className="courseOptionButton">Apply Coupon</button>
      </div>
    </div>
  );
}

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
