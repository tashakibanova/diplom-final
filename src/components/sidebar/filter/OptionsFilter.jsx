import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./OptionsFilter.css";
import kupe from "../../../img/options/kupe.svg";
import platzcart from "../../../img/options/platzcart.svg";
import seat from "../../../img/options/seat.svg";
import lux from "../../../img/options/lux.svg";
import express from "../../../img/options/express.svg";
import wifi from "../../../img/options/wifi.svg";
import { filterValueChange } from "../../../redux/filter/actions";

function OptionsFilter(props) {
  const { filter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(filterValueChange(event.target.name, event.target.checked));
  };

  return (
    <div className="filter__options">
      <ul className="filter__options-list">
        <li className="filter__options-item">
          <div className="filter__options-icon">
            <img className="filter__options-image" src={kupe} alt="Купе" />
          </div>
          <p className="filter__options-title">Купе</p>
          <div className="filter__options-form">
            <input
              className="filter__options-checkbox"
              type="checkbox"
              name="kupe"
              checked={filter.kupe}
              onChange={handleChange}
            />
          </div>
        </li>
        <li className="filter__options-item">
          <div className="filter__options-icon">
            <img
              className="filter__options-image"
              src={platzcart}
              alt="Плацкарт"
            />
          </div>
          <p className="filter__options-title">Плацкарт</p>
          <div className="filter__options-form">
            <input
              className="filter__options-checkbox"
              type="checkbox"
              name="platzcart"
              checked={filter.platzcart}
              onChange={handleChange}
            />
          </div>
        </li>
        <li className="filter__options-item">
          <div className="filter__options-icon">
            <img className="filter__options-image" src={seat} alt="Сидячий" />
          </div>
          <p className="filter__options-title">Сидячий</p>
          <div className="filter__options-form">
            <input
              className="filter__options-checkbox"
              type="checkbox"
              name="seat"
              checked={filter.seat}
              onChange={handleChange}
            />
          </div>
        </li>
        <li className="filter__options-item">
          <div className="filter__options-icon">
            <img className="filter__options-image" src={lux} alt="Люкс" />
          </div>
          <p className="filter__options-title">Люкс</p>
          <div className="filter__options-form">
            <input
              className="filter__options-checkbox"
              type="checkbox"
              name="lux"
              checked={filter.lux}
              onChange={handleChange}
            />
          </div>
        </li>
        <li className="filter__options-item">
          <div className="filter__options-icon">
            <img className="filter__options-image" src={wifi} alt="Wi-Fi" />
          </div>
          <p className="filter__options-title">Wi-Fi</p>
          <div className="filter__options-form">
            <input
              className="filter__options-checkbox"
              type="checkbox"
              name="wifi"
              checked={filter.wifi}
              onChange={handleChange}
            />
          </div>
        </li>
        <li className="filter__options-item">
          <div className="filter__options-icon">
            <img
              className="filter__options-image"
              src={express}
              alt="Экспресс"
            />
          </div>
          <p className="filter__options-title">Экспресс</p>
          <div className="filter__options-form">
            <input
              className="filter__options-checkbox"
              type="checkbox"
              name="express"
              checked={filter.express}
              onChange={handleChange}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default OptionsFilter;
