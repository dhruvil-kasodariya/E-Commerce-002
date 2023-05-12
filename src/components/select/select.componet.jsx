import React from "react";

import Select from "react-select";

const customStyles = {
  option: (provided, state) => ({
    ...provided,

    backgroundColor: state.isSelected ? "#1a1a1a" : "transparent",
    color: state.isSelected ? "white" : "black",
    ":hover": {
      backgroundColor: state.isSelected ? "#1a1a1a" : "#f2f2f2",
      color: state.isSelected ? "white" : "black",
    },
  }),
  control: (provided, state) => ({
    ...provided,

    minHeight: "30px",
    height: "30px",
    backgroundColor: state.isFocused ? "#f2f2f2" : "transparent",
    border: state.isFocused ? "2px solid #ff4d4d" : "2px solid #bfbfbf",
    boxShadow: state.isFocused ? "none" : "none",
    borderRadius: "25px",
    ":hover": {
      border: "2px solid #ff4d4d",
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
  }),
};

const MySelect = ({ selectedOption, handleChange, options, placeholder }) => {
  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      styles={customStyles}
      placeholder={placeholder}
      isClearable={true}
    />
  );
};

export default MySelect;
