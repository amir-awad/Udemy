import React, { useState } from "react";
import { Collapse } from "react-collapse";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";

function ContentItem({ item }) {
  let [collapse, setCollapse] = useState(false);
  let [down, setDown] = useState(true);

  const changeCollapse = () => {
    setCollapse(!collapse);
    setDown(!down);
  };

  const getCollapseItems = (items) => {
    return items.map((item) => {
      return (
        <div key={item}>
          <li className="liClass">
            <div>
              <FontAwesomeIcon className="faCirclePlay" icon={faCirclePlay} />
              <span>{item}</span>
            </div>
          </li>
        </div>
      );
    });
  };
  return (
    <>
      <div className="contentItem">
        <div className="collapseController" onClick={changeCollapse}>
          <FontAwesomeIcon
            className="fontAwesome"
            icon={down ? faChevronDown : faChevronUp}
            color="#000"
          />
          <button className="collapseButton">{item[0][0]}</button>
        </div>

        <Collapse isOpened={collapse}>
          <ul>{getCollapseItems(item[1])}</ul>
        </Collapse>
      </div>
    </>
  );
}

export default ContentItem;
