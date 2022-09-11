import React from "react";

function ShortcutNavigation() {
  return (
    <div className="shortcut-navigation-buttons">
      <button className="shortcutButton">
        <span>Overview</span>
      </button>
      <button className="shortcutButton">
        <span>Curriculum</span>
      </button>
      <button className="shortcutButton">
        <span>Instructor</span>
      </button>
      <button className="shortcutButton">
        <span>Reviews</span>
      </button>
    </div>
  );
}

export default ShortcutNavigation;
