import React from "react";
import DateFilter from "./DateFilter";
import OptionsFilter from "./OptionsFilter";
import PriceFilter from "./PriceFilter";
import TimeFilter from "./TimeFilter";
import "./Filter.css";

function Filter(props) {
  return (
    <div className="filter">
      <DateFilter />
      <OptionsFilter />
      <PriceFilter />
      <TimeFilter />
    </div>
  );
}

export default Filter;
