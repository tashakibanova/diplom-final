import React from "react";
import { useSelector, useDispatch } from "react-redux";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { filterValueChange } from "../../../redux/filter/actions";
import "./PriceFilter.css";

function PriceFilter(props) {
  const { filter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(filterValueChange("price", { from: value.min, to: value.max }));
  };

  return (
    <div className="filter__price">
      <h4 className="title title--small filter__price-title">Стоимость </h4>
      <div className="filter__price-label-wrapper">
        <p className="filter__price-label">от</p>
        <p className="filter__price-label">до</p>
      </div>
      <div className="filter__price-range">
        <InputRange
          minValue={0}
          maxValue={9000}
          step={10}
          value={{ min: filter.price.from, max: filter.price.to }}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default PriceFilter;
