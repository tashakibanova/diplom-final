import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routeTo, routeBack, seat, platzcart, kupe, lux } from "../../svg";
import { passengersCountChange } from "../../../redux/passengers/actions";
import {
  coachClassChange,
  coachItemsSelect,
  coachItemsUnselect,
  coachItemsClear,
} from "../../../redux/coach/actions";
import { coachListFetch } from "../../../redux/utils/api";
import "./Ticket.css";
import Train from "../trains/Train";
import Coach from "./Coach";

function Ticket({ type }) {
  const { train } = useSelector((state) => state.train);
  const { coachList, coachClass, coachItems } = useSelector(
    (state) => state.coach
  );
  const { passengersCount } = useSelector((state) => state.passengers);
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    dispatch(coachListFetch(train.departure._id));
  }, [dispatch, train.departure._id]);

  const available = {
    adult: 4 - passengersCount.adult - passengersCount.child,
    child:
      passengersCount.adult === 0
        ? 3
        : 4 - passengersCount.adult - passengersCount.child,
    baby: passengersCount.adult,
  };

  const classes = {
    fourth: {
      available: train[type].have_fourth_class === false,
      icon: seat,
      name: "Сидячий",
    },
    third: {
      available: train[type].have_third_class === false,
      icon: platzcart,
      name: "Платцкарт",
    },
    second: {
      available: train[type].have_second_class === false,
      icon: kupe,
      name: "Купе",
    },
    first: {
      available: train[type].have_first_class === false,
      icon: lux,
      name: "Люкс",
    },
  };

  const handleChange = (name, value) => {
    if (available[name] + passengersCount[name] < value) return;
    if (name === "baby" && available[name] < value) return;
    dispatch(passengersCountChange(name, Number(value)));
  };

  const handleClick = (type) => {
    dispatch(coachClassChange(type));
    dispatch(coachItemsClear());
  };

  const handleCoachClick = (id) => {
    if (coachItems.includes(id)) {
      dispatch(coachItemsUnselect(id));
    } else {
      dispatch(coachItemsSelect(id));
    }
  };

  const handleBack = () => {
    dispatch(coachItemsClear());
    history.goBack();
  };

  return (
    <div className="ticket">
      <div className="ticket__header ticket__header--route--there">
        <div className="ticket__header-actions">
          {(type = "departure" ? routeTo : routeBack)}
          <button className="button ticket__header-button" onClick={handleBack}>
            Выбрать другой поезд
          </button>
        </div>
        <Train train={train} type={type} option="ticket__header-train" />
      </div>
      <section className="ticket__count">
        <h4 className="title title--small ticket__count-title">
          Количество билетов
        </h4>
        <div className="ticket__count-wrapper">
          <div className="ticket__count-card ticket__count-card--adults">
            <select
              className="ticket__count-list"
              name="adult"
              value={passengersCount.adult}
              onChange={(event) =>
                handleChange(event.target.name, event.target.value)
              }
            >
              {[0, 1, 2, 3, 4].map((el) => (
                <option
                  className="ticket__count-item"
                  value={el}
                  key={`adult${el}`}
                >
                  Взрослых — {el}
                </option>
              ))}
            </select>
            {available.adult > 0 && (
              <p className="ticket__count-text">
                Можно добавить еще {available.adult}{" "}
                {available.adult > 1 ? "пассажиров" : "пассажира"}
              </p>
            )}
          </div>
          <div className="ticket__count-card ticket__count-card--children">
            <select
              className="ticket__count-list"
              name="child"
              value={passengersCount.child}
              onChange={(event) =>
                handleChange(event.target.name, event.target.value)
              }
            >
              {[0, 1, 2, 3].map((el) => (
                <option
                  className="ticket__count-item"
                  value={el}
                  key={`child${el}`}
                >
                  Детских — {el}
                </option>
              ))}
            </select>
            {available.child > 0 && (
              <p className="ticket__count-text">
                Можно добавить еще {available.child}{" "}
                {available.child > 1 ? "детей" : "ребенка"} до 10 лет.Свое место
                в вагоне, как у взрослых, но дешевле в среднем на 50-65%
              </p>
            )}
          </div>
          <div className="ticket__count-card">
            <select
              className="ticket__count-list"
              name="baby"
              value={passengersCount.baby}
              onChange={(event) =>
                handleChange(event.target.name, event.target.value)
              }
            >
              {[0, 1, 2, 3, 4].map((el) => (
                <option
                  className="ticket__count-item"
                  value={el}
                  key={`baby${el}`}
                >
                  Детских «без места» — {el}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
      <section className="ticket__class">
        <h4 className="title title--small ticket__class-title">Тип вагона</h4>
        <ul className="ticket__class-list">
          {Object.keys(classes).map((el) => (
            <li className="ticket__class-item" key={el}>
              <button
                className={`ticket__class-button ${
                  coachClass === el ? "ticket__class-button--active" : ""
                }`}
                disabled={classes[el].available}
                onClick={(event) => handleClick(el)}
              >
                {classes[el].icon}
                <p className="ticket__class-name">{classes[el].name}</p>
              </button>
            </li>
          ))}
        </ul>
      </section>
      {coachList.filter((el) => el.coach.class_type === coachClass).length >
        0 && (
        <div className="ticket__coach">
          <div className="ticket__coach-header">
            <ul className="ticket__coach-list">
              Вагоны
              {coachList
                .filter((el) => el.coach.class_type === coachClass)
                .map((el, index) => (
                  <li
                    className={`ticket__coach-item ${
                      coachItems.includes(el.coach._id)
                        ? "ticket__coach-item--active"
                        : ""
                    }`}
                    key={el.coach._id}
                    onClick={() => handleCoachClick(el.coach._id)}
                  >
                    {el.coach._id.toString().slice(-2)}
                  </li>
                ))}
            </ul>
            <p className="ticket__coach-numbering">
              Нумерация вагонов начинается с головы поезда
            </p>
          </div>
          {coachList
            .filter(
              (el) =>
                el.coach.class_type === coachClass &&
                coachItems.includes(el.coach._id)
            )
            .map((el) => (
              <Coach key={el.coach._id} coach={el.coach} seatsList={el.seats} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Ticket;
