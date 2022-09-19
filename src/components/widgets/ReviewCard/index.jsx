import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
function ReviewCard({ review }) {
  return (
    <div className="courseReview">
      <span className="reviewImage">
        {review.name.split(" ").length >= 2
          ? review.name.split(" ")[0].charAt(0) +
            review.name.split(" ")[1].charAt(0)
          : review.name.split(" ")[0].charAt(0)}
      </span>
      <div className="reviewCardContent">
        <h3>{review.name}</h3>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <p className="reviewCardPar">{review.content}</p>
        <p>Was this review helpful?</p>
        <div className="rateOrReport">
          <button className="likeOrDislike">
            <FontAwesomeIcon icon={faThumbsUp} />
          </button>
          <button className="likeOrDislike mirror">
            <FontAwesomeIcon icon={faThumbsDown} />
          </button>
          <button className="reportButton">
            <span>Report</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
