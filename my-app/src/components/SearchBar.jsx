import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = ({ courses }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  const clickHandler = () => {
    if (inputValue.length > 0 && previousInputValue !== inputValue) {
      navigate("/search/search=" + inputValue);
    }
  };

  return (
    <>
      <div className="search-bar">
        <form name="searchForm">
          <button
            type="button"
            id="search-button"
            onClick={clickHandler}
            className="fa fa-search"
          ></button>
          <input
            type="text"
            required="required"
            placeholder="Search for anything"
            autoComplete="off"
            aria-haspopup="false"
            name="search"
            id="search-field"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
