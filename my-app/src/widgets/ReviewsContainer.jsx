import React from "react";
import ReviewCard from "./ReviewCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function ReviewsContainer({ reviews }) {
  const createReviewsCards = () => {
    return reviews.map((review) => {
      return <ReviewCard key={review.id} review={review} />;
    });
  };

  return (
    <>
      <h6>Reviews</h6>
      <div className="reviewSearchDiv">
        <div className="reviewFormDiv"> 
          <form className="reviewSearchForm">
            <input
              type="text"
              required="required"
              placeholder="Search reviews"
              autoComplete="off"
              aria-haspopup="false"
              className="reviewSearchField"
            />
            <button type="button" className="reviewSearchButton">
              <FontAwesomeIcon icon={faMagnifyingGlass} color="white" />
            </button>
          </form>
        </div>
        <button className="allRatingButton">
          <span className="ratingsButtonText">All ratings</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>

      <div className="reviewsContainer">{createReviewsCards()}</div>
      <button className="moreReviewsButton">See more reviews</button>
    </>
  );
}

export default ReviewsContainer;
