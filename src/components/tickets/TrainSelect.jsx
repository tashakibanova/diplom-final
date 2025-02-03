import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterValueChange } from "../../redux/filter/actions";
import { trainListFetch } from "../../redux/utils/api";
import "./TrainSelect.css";
import Train from "./trains/Train";
import Paginator from "../elements/Paginator";

function TrainSelect(props) {
  const { filter } = useSelector((state) => state.filter);
  const { count, trainList } = useSelector((state) => state.train);
  const limits = [5, 10, 20];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(trainListFetch(filter));
  }, [dispatch, filter]);

  const handleChange = (name, value) => {
    dispatch(filterValueChange(name, value));
  };

  return (
    <div className="order__options trains">
      <div className="trains__header">
        <div className="trains__count">найдено {count}</div>
        <div className="trains__sort">
          <h5 className="trains__sort-title">сортировать по:</h5>
          <select
            className="trains__sort-list"
            name="sort"
            value={filter.sort}
            onChange={(event) =>
              handleChange(event.target.name, event.target.value)
            }
          >
            <option className="trains__sort-item" value="time">
              времени
            </option>
            <option className="trains__sort-item" value="price">
              стоимости
            </option>
            <option className="trains__sort-item" value="duration">
              длительности
            </option>
          </select>
        </div>
        <div className="trains__view">
          <h5 className="trains__view-title">показывать по:</h5>
          <ul className="trains__view-list">
            {limits.map((el) => (
              <li
                className={`trains__view-item ${
                  filter.limit === el ? "trains__view-item--active" : ""
                }`}
                key={el}
                onClick={() => handleChange("limit", el)}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="trains__train-list">
        {trainList.map((el, index) => (
          <Train key={index} train={el} />
        ))}
      </div>
      <div className="trains__footer">
        <Paginator />
      </div>
    </div>
  );
}

export default TrainSelect;
