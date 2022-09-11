import React, { useRef, useState, useEffect } from "react";
import { Routes, Route, useNavigate, useSearchParams } from "react-router-dom";
import SearchPage from "./SearchPage";

const SearchBar = ({ courses }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  // const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  const clickHandler = () => {
    if (inputValue.length > 0 && previousInputValue !== inputValue) {
      // setSearchParams({ search: inputValue });
      navigate("/search/search="+inputValue);
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
