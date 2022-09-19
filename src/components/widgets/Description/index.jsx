import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
export { InstructorDescription };

function InstructorDescription({ description }) {
  const [showMore, setShowMore] = useState(false);

  const clickHandle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="courseDescrpition">
      <div className="moreOrLess">
        {showMore ? (
          <ShowMore description={description} targetPeople={[]} />
        ) : (
          <ShowLess description={description} instructor={true} />
        )}
        <div className="descButtonDiv" onClick={clickHandle}>
          <button className="descButton">
            {showMore ? "Show less" : "Show more"}
          </button>
          <FontAwesomeIcon
            className="fontAwesome"
            icon={showMore ? faChevronUp : faChevronDown}
            color="#000"
          />
        </div>
      </div>
    </div>
  );
}

function ShowLess({ description, instructor }) {
  let desc = description.slice(
    0,
    instructor ? description.length / 2 : description.length / 4,
  );

  const getDesc = () => {
    return desc.map((line) => {
      return <p className="descriptionPar" key={line + line}>{line}</p>;
    });
  };

  return getDesc();
}
function ShowMore({ description, targetPeople }) {
  let id = 1;
  const getDesc = () => {
    return description.map((line) => {
      return <p className="descriptionPar" key={line + id++}>{line}</p>;
    });
  };

  const getTargetPeople = () => {
    return targetPeople.map((qualification) => {
      return <li className="descriptionPar" key={qualification}>{qualification}</li>;
    });
  };

  return targetPeople.length > 0 ? (
    <>
      <div>{getDesc()}</div>
      <h3>Who this course is for:</h3>
      <div className="targetPeople">
        <ul>{getTargetPeople()}</ul>
      </div>
    </>
  ) : (
    <div>{getDesc()}</div>
  );
}

function Description({ description, targetPeople }) {
  const [showMore, setShowMore] = useState(false);

  const clickHandle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="courseDescription">
      <h6>Description</h6>
      <div className="moreOrLess">
        {showMore ? (
          <ShowMore description={description} targetPeople={targetPeople} />
        ) : (
          <ShowLess description={description} instructor={false} />
        )}
        <div className="descButtonDiv" onClick={clickHandle}>
          <button className="descButton">
            {showMore ? "Show less" : "Show more"}
          </button>
          <FontAwesomeIcon
            className="fontAwesome"
            icon={showMore ? faChevronUp : faChevronDown}
            color="#000"
          />
        </div>
      </div>
    </div>
  );
}

export default Description;
