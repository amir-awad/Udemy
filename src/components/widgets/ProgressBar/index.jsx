import React from "react";

const ProgressBar = ({ progress }) => {
  const parentDiv = {
    display: "inline-block",
    height: 10,
    width: "85%",
    backgroundColor: "#d1d7dc",
    marginBottom:15,
    marginTop:10,
    marginRight:5,
  };

  const childDiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#7f8c8d",
    textAlign: "right",
  };

  return (
    <>
      <div style={parentDiv}>
        <div style={childDiv} className="progressBar"></div>
      </div>
      <div className="ratingBesidePrgBar">
        <span
          className={"fa fa-star" + (progress >= 20 ? " checked" : "")}
        ></span>
        <span
          className={"fa fa-star" + (progress >= 40 ? " checked" : "")}
        ></span>
        <span
          className={"fa fa-star" + (progress >= 60 ? " checked" : "")}
        ></span>
        <span
          className={"fa fa-star" + (progress >= 80 ? " checked" : "")}
        ></span>
        <span
          className={"fa fa-star" + (progress >= 100 ? " checked" : "")}
        ></span>
        <span className="ratingPercentage">{progress + "%"}</span>
      </div>
    </>
  );
};

export default ProgressBar;
