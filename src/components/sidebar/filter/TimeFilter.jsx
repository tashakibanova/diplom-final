import React from "react";
import { useSelector, useDispatch } from "react-redux";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { filterValueChange } from "../../../redux/filter/actions";
import "./TimeFilter.css";

function TimeFilter(props) {
  const { filter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleChange = (name, value) => {
    dispatch(filterValueChange(name, { from: value.min, to: value.max }));
  };
  return (
    <>
      <div className="filter__time">
        <div className="sidebar__inner sidebar__inner">
          <div className="sidebar__header sidebar__header--route--to">
            <h4 className="title title--small sidebar__title">Туда</h4>
            <button className="sidebar__button"></button>
          </div>
          <div className="filter__time-form">
            <p className="filter__time-title">Время отбытия</p>
            <div className="filter__time-range">
              <InputRange
                formatLabel={(value) => `${value}:00`}
                minValue={0}
                maxValue={24}
                value={{
                  min: filter.startDeparture.from,
                  max: filter.startDeparture.to,
                }}
                onChange={(value) => handleChange("startDeparture", value)}
              />
            </div>
            <p className="filter__time-title">Время прибытия</p>
            <div className="filter__time-range">
              <InputRange
                formatLabel={(value) => `${value}:00`}
                minValue={0}
                maxValue={24}
                value={{
                  min: filter.startArrival.from,
                  max: filter.startArrival.to,
                }}
                onChange={(value) => handleChange("startArrival", value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="filter__time">
        <div
          className={`sidebar__inner ${
            filter.dateEnd ? "" : "sidebar__inner--hide"
          }`}
        >
          <div className="sidebar__header sidebar__header--route--back">
            <h4 className="title title--small sidebar__title">Обратно</h4>
            <button className="sidebar__button"></button>
          </div>
          <div className="filter__time-form">
            <p className="filter__time-title">Время отбытия</p>
            <div className="filter__time-range">
              <InputRange
                formatLabel={(value) => `${value}:00`}
                minValue={0}
                maxValue={24}
                value={{
                  min: filter.endDeparture.from,
                  max: filter.endDeparture.to,
                }}
                onChange={(value) => handleChange("endDeparture", value)}
              />
            </div>
            <p className="filter__time-title">Время прибытия</p>
            <div className="filter__time-range">
              <InputRange
                formatLabel={(value) => `${value}:00`}
                minValue={0}
                maxValue={24}
                value={{
                  min: filter.endArrival.from,
                  max: filter.endArrival.to,
                }}
                onChange={(value) => handleChange("endArrival", value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeFilter;
