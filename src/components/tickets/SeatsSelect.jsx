import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { progressStageChange } from "../../redux/progress/actions";
import "./SeatsSelect.css";
import Ticket from "./seats/Ticket";

function SeatsSelect(props) {
  const { train } = useSelector((state) => state.train);
  const { seatsCount } = useSelector((state) => state.coach);
  const { passengersCount } = useSelector((state) => state.passengers);
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (
      seatsCount > 0 &&
      seatsCount ===
        Number(passengersCount.adult) + Number(passengersCount.child)
    ) {
      dispatch(progressStageChange(2));
      history.push("/order/passengers");
    }
  };

  return (
    <section className="order__options seats-select">
      <h3 className="title title--small seats-select__title">Выбор мест</h3>
      {train.departure && <Ticket type="departure" />}
      {train.arrival && <Ticket type="arrival" />}
      <button className="button seats-select__button" onClick={handleClick}>
        Далее
      </button>
    </section>
  );
}

export default SeatsSelect;
