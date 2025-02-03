import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  seatsItemSelect,
  seatsItemUnselect,
} from "../../../redux/coach/actions";

function Seat({ id, number, type, left, available }) {
  const { seats, seatsCount } = useSelector((state) => state.coach);
  const { passengersCount } = useSelector((state) => state.passengers);
  const dispatch = useDispatch();

  const style = {
    top: "0",
    left: `${left}px`,
  };

  if (type === "top") {
    if (number % 2 === 0) {
      style.top = "30px";
    } else {
      style.top = "60px";
    }
  } else if (type === "bottom") {
    style.top = "113px";
  } else if (type === "lux") {
    style.top = "29px";
  } else {
    if (number < 33) {
      if (number % 2 === 0) {
        style.top = "33px";
      } else {
        style.top = "54px";
      }
    } else {
      if (number === 62 || number % 2 !== 0) {
        style.top = "113px";
      } else {
        style.top = "93px";
      }
    }
  }

  const handleClick = (number) => {
    if (seats[id] && seats[id].includes(number)) {
      dispatch(seatsItemUnselect(id, number));
    } else {
      if (seatsCount < passengersCount.adult + passengersCount.child) {
        dispatch(seatsItemSelect(id, number));
      }
    }
  };

  return (
    <button
      className={`coach-seat coach-seat--${type} ${
        seats[id] && seats[id].includes(number) ? "coach-seat--active" : ""
      }`}
      style={style}
      disabled={!available}
      onClick={() => handleClick(number)}
    >
      <p className="coach-seat-number" id={number}>
        {number}
      </p>
    </button>
  );
}

export default Seat;
