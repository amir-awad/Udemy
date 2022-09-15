import React from "react";
import AlarmImg from "../images/alarm.png";
function Header() {
  return (
    <>
      <div className="header">
        <div className="wel-msg">
          <h5>New to Udemy? Lucky you.</h5>
          <p>
            Courses start at E£169.99. Get your new student offer before it
            expires.
          </p>
        </div>
        <img src={AlarmImg} alt="Alarm" className="alarm" />
      </div>
      <ul
        id="header-icons"
        className="header-icons"
        width="100%"
        aria-hidden="true"
      >
        <div id="small-wel-msg">
          <h5>New to Udemy? Lucky you.</h5>
          <p>
            Courses start at E£169.99. Get your new student offer before it
            expires.
          </p>
        </div>
        <img src={AlarmImg} alt="Alarm" id="smallAlarm" />
      </ul>
    </>
  );
}

export default Header;
