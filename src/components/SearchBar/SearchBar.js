import React, { useState } from "react";
import PropTypes from "prop-types";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

import "./styles.css";

const SearchBar = ({ handleSearchValue }) => {
  /** States */
  const [searchValue, setSearchValue] = useState("");

  /**
   * Updates the search value based on user input.
   * @param {object} e - The event object containing information about the input event.
   */
  const onSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-root">
      <input
        type="text"
        placeholder="Enter City Name"
        value={searchValue}
        className="search-bar"
        onChange={onSearchValue}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            handleSearchValue(searchValue);
          }
        }}
      />
      <button
        className={`search-button ${
          !searchValue ? "search-button-disable" : ""
        }`}
        disabled={!searchValue}
        onClick={() => handleSearchValue(searchValue)}
      >
        <SearchIcon className="search-icon" />
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  handleSearchValue: PropTypes.func,
};

export default SearchBar;
