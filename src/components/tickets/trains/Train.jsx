import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "./Train.css";
import Currency from "../../elements/Currency";
import trainLogo from "../../../img/logo/train.svg";
import trainLogoSmall from "../../../img/logo/train-sm.svg";
import {
  defaultRoute,
  route,
  departure,
  arrival,
  wifi,
  express,
  food,
} from "../../svg";
import { trainItemChange } from "../../../redux/train/actions";
import Duration from "../../elements/Duration";

function Train({ train, option, type }) {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleClick = () => {
    if (!option) {
      dispatch(trainItemChange(train));
      history.push("/order/tickets/seats");
    }
  };

  return (
    <div className={`train order__train ${option ? option : ""}`}>
      <div className="train__logo">
        <img
          className="train__logo-icon"
          src={option === "ticket__header-train" ? trainLogoSmall : trainLogo}
          alt="Train"
        />
        <div className="train__title">
          <h4 className="train__name">{train.departure.train.name}</h4>
          {train.default && (
            <p className="train__title-route train__title-route--default">
              {train.default}
              {defaultRoute}
            </p>
          )}
          <p className="train__title-route">
            {train.departure.from.city.name}
            {route}
          </p>
          <p className="train__title-route ">{train.departure.to.city.name}</p>
        </div>
      </div>
      <div className="train__routes">
        {train.departure && type !== "arrival" && (
          <div className="route train__route">
            <div className="route__info train__route-info">
              <p className="route__time train__route-time">
                {moment
                  .unix(train.departure.from.datetime)
                  .utc()
                  .format("HH:mm")}
              </p>
              <p className="route__city train__route-city">
                {train.departure.from.city.name}
              </p>
              <p className="route__station train__route-station">
                {train.departure.from.railway_station_name} {"вокзал"}
              </p>
            </div>
            <div className="route__duration train__route-duration">
              {option !== "ticket__header-train" && (
                <p className="route__duration-time train__route-duration-time">
                  {moment.unix(train.departure.duration).utc().format("HH:mm")}
                </p>
              )}
              {departure}
            </div>
            <div className="route__info train__route-info">
              <p className="route__time train__route-time">
                {moment.unix(train.departure.to.datetime).utc().format("HH:mm")}
              </p>
              <p className="route__city train__route-city">
                {train.departure.to.city.name}
              </p>
              <p className="route__station train__route-station">
                {train.departure.to.railway_station_name} {"вокзал"}
              </p>
            </div>
          </div>
        )}
        {train.arrival && type !== "departure" && (
          <div className="route train__route train__route--back">
            <div className="route__info train__route-info">
              <p className="route__time train__route-time">
                {moment.unix(train.arrival.to.datetime).utc().format("HH:mm")}
              </p>
              <p className="route__city train__route-city">
                {train.arrival.to.city.name}
              </p>
              <p className="route__station train__route-station">
                {train.arrival.to.railway_station_name} {"вокзал"}
              </p>
            </div>
            <div className="route__duration train__route-duration train__route-duration">
              {option !== "ticket__header-train" && (
                <p className="route__duration-time train__route-duration-time">
                  {moment.unix(train.arrival.duration).utc().format("HH:mm")}
                </p>
              )}
              {arrival}
            </div>
            <div className="route__info train__route-info">
              <p className="route__time train__route-time">
                {moment.unix(train.arrival.from.datetime).utc().format("HH:mm")}
              </p>
              <p className="route__city train__route-city">
                {train.arrival.from.city.name}
              </p>
              <p className="route__station train__route-station">
                {train.arrival.from.railway_station_name} {"вокзал"}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="train__info">
        {option !== "ticket__header-train" && (
          <>
            <ul className="train__seats-list">
              {train.departure.available_seats_info.fourth && (
                <li className="train__seats-item">
                  <p className="train__seats-type">Сидячий</p>
                  <p className="train__seats-count">
                    {train.departure.available_seats_info.fourth}
                  </p>
                  <span className="train__seats-price">
                    от{" "}
                    <Currency
                      title="train__seats-price"
                      value={train.departure.price_info.fourth.top_price}
                    />
                  </span>
                </li>
              )}
              {train.departure.available_seats_info.third && (
                <li className="train__seats-item">
                  <p className="train__seats-type">Плацкарт</p>
                  <p className="train__seats-count">
                    {train.departure.available_seats_info.third}
                  </p>
                  <span className="train__seats-price">
                    от{" "}
                    <Currency
                      title="train__seats-price"
                      value={train.departure.price_info.third.side_price}
                    />
                  </span>
                </li>
              )}
              {train.departure.available_seats_info.second && (
                <li className="train__seats-item">
                  <p className="train__seats-type">Купе</p>
                  <p className="train__seats-count">
                    {train.departure.available_seats_info.second}
                  </p>
                  <span className="train__seats-price">
                    от{" "}
                    <Currency
                      title="train__seats-price"
                      value={train.departure.price_info.second.bottom_price}
                    />
                  </span>
                </li>
              )}
              {train.departure.available_seats_info.first && (
                <li className="train__seats-item">
                  <p className="train__seats-type">Люкс</p>
                  <p className="train__seats-count">
                    {train.departure.available_seats_info.first}
                  </p>
                  <span className="train__seats-price">
                    от{" "}
                    <Currency
                      title="train__seats-price"
                      value={train.departure.price_info.first.top_price}
                    />
                  </span>
                </li>
              )}
            </ul>
            <div className="train__options">
              {train.departure.have_wifi && wifi("train__options-icon")}
              {train.departure.is_express && express("train__options-icon")}
              {food("train__options-icon")}
            </div>
            <button
              className={`button ${
                option === "verification"
                  ? "verification__button"
                  : "train__seats-button"
              }`}
              onClick={handleClick}
            >
              {option === "verification" ? "Изменить" : "Выбрать места"}
            </button>
          </>
        )}
        {option === "ticket__header-train" && (
          <Duration
            hours={moment.unix(train.departure.duration).utc().format("H")}
            minutes={moment.unix(train.departure.duration).utc().format("m")}
          />
        )}
      </div>
    </div>
  );
}

export default Train;
