import React from "react";
import "./search.style.css";

export const Search = ({ placeholder, handleChange }) => {
  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
