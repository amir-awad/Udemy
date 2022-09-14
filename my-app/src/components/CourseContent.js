import React, { useState } from "react";
import ContentItem from "./ContentItem";

function CourseContent({ content, sectionsCount, lecturesCount, totalLength }) {
  const [moreContent, setMoreContent] = useState(true);

  const getContent = (shownContent) => {
    return shownContent.map((item) => {
      return <ContentItem item={item} key={item} />;
    });
  };

  const clickHandle = () => {
    setMoreContent(false);
  };

  const displayContentButton = () => {
    return moreContent ? (
      <button className="moreContentButton" onClick={clickHandle}>
        {content.length - 5} more sections
      </button>
    ) : (
      <></>
    );
  };

  const displayContent = () => {
    return (
      <>
        <h6>Course Content</h6>
        <div className="content">
          <span className="contentCount">
            {sectionsCount} sections - {lecturesCount} lectures - {totalLength}{" "}
            total length
          </span>
        </div>
        <div className="courseContent">
          {!moreContent ? getContent(content) : getContent(content.slice(0, 5))}
        </div>
        {displayContentButton()}
      </>
    );
  };

  return content.length <= 5 ? (
    <>
      <h6>Course Content</h6>
      <div className="content">
        <span className="contentCount">
          {sectionsCount} sectios - {lecturesCount} lectures - {totalLength}{" "}
          total length
        </span>
      </div>
      <div className="courseContent">{getContent(content)}</div>
    </>
  ) : (
    <>{displayContent()}</>
  );
}

export default CourseContent;
