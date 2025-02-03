import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { progressStageChange } from "../../redux/progress/actions";
import "./PassengersForm.css";
import Passenger from "./Passenger";

function PassengersForm(props) {
  const [passengersCards, setPassengersCards] = useState([]);
  const { passengers, passengersCount } = useSelector(
    (state) => state.passengers
  );
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    const passengersArr = [];
    const count = Array.from(Object.values(passengersCount)).reduce(
      (el, acc) => acc + el,
      0
    );
    for (let i = 1; i <= count; i++) {
      passengersArr.push(i);
    }
    setPassengersCards(passengersArr);
  }, [passengersCount]);

  const handleClick = () => {
    if (
      passengers.length ===
      Array.from(Object.values(passengersCount)).reduce(
        (el, acc) => acc + el,
        0
      )
    ) {
      dispatch(progressStageChange(3));
      history.push("/order/pay");
    }
  };

  return (
    <div className="order__options passengers">
      {passengersCards
        .slice(
          0,
          passengersCards.length - passengersCount.child - passengersCount.baby
        )
        .map((el, index) => (
          <Passenger key={index} number={index + 1} type="adult" />
        ))}
      {passengersCards
        .slice(
          passengersCards.length - passengersCount.child - passengersCount.baby
        )
        .map((el, index) => (
          <Passenger
            key={index}
            number={index + passengersCount.adult + 1}
            type="child"
          />
        ))}
      <button className="passengers__add-button">Добавить пассажира</button>
      <div className="passengers__footer">
        <button
          className="button passengers__footer-button"
          onClick={handleClick}
        >
          Далее
        </button>
      </div>
    </div>
  );
}

export default PassengersForm;
