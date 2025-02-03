import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import "./Details.css";
import { departure, arrival } from "../../svg";
import Currency from "../../elements/Currency";

function Details(props) {
  const { filter } = useSelector((state) => state.filter);
  const { train } = useSelector((state) => state.train);
  const { passengersCount, passengersPrice } = useSelector(
    (state) => state.passengers
  );

  return (
    <section className="details">
      <h3 className="title title--small details__title">Детали поездки</h3>
      <div className="sidebar__inner">
        <div className="sidebar__header sidebar__header--route--to">
          <h4 className="title title--small sidebar__title">
            Туда <span className="sidebar__date">30.08.2018</span>
          </h4>

          <button className="sidebar__button"></button>
        </div>
        <div className="details__info">
          <p className="details__info-title">№ Поезда</p>
          <p className="details__info-text details__info-text--train">
            {train.departure.train.name}
          </p>
        </div>
        <div className="details__info details__info--city">
          <p className="details__info-title">Название</p>
          <p className="details__info-text details__info-text--route">
            {train.departure.from.city.name} {"\n"}{" "}
            {train.departure.to.city.name}
          </p>
        </div>
        <div className="details__info details__info--route">
          <div className="route">
            <div className="route__info">
              <p className="route__time">
                {moment
                  .unix(train.departure.from.datetime)
                  .utc()
                  .format("HH:mm")}
              </p>
              <p className="route__date">30.08.2018</p>
            </div>
            <div className="route__duration">
              <p className="route__duration-time">
                {moment.unix(train.departure.duration).utc().format("HH:mm")}
              </p>
              {departure}
            </div>
            <div className="route__info route__info--right">
              <p className="route__time">
                {moment.unix(train.departure.to.datetime).utc().format("HH:mm")}
              </p>
              <p className="route__date">31.08.2018</p>
            </div>
          </div>
          <div className="route">
            <div className="route__info">
              <p className="route__city">{train.departure.from.city.name}</p>
              <p className="route__station">
                {train.departure.from.railway_station_name} {"\n"} вокзал
              </p>
            </div>
            <div className="route__info route__info--right">
              <p className="route__city">{train.departure.to.city.name}</p>
              <p className="route__station">
                {train.departure.to.railway_station_name} {"\n"} вокзал
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sidebar__inner ${
          filter.dateEnd ? "" : "sidebar__inner--hide"
        }`}
      >
        <div className="sidebar__header sidebar__header--route--back">
          <h4 className="title title--small sidebar__title">
            Обратно <span className="sidebar__date">09.09.2018</span>
          </h4>

          <button className="sidebar__button"></button>
        </div>
        <div className="details__info">
          <p className="details__info-title">№ Поезда</p>
          <p className="details__info-text details__info-text--train">116С</p>
        </div>
        <div className="details__info details__info--city">
          <p className="details__info-title">Название</p>
          <p className="details__info-text details__info-text--route">
            Адлер {"\n"} Санкт-Петербург
          </p>
        </div>
        <div className="details__info details__info--route">
          <div className="route">
            <div className="route__info">
              <p className="route__time">00:10</p>
              <p className="route__date">30.08.2018</p>
            </div>
            <div className="route__duration">
              <p className="route__duration-time">9 : 42 </p>
              {arrival}
            </div>
            <div className="route__info route__info--right">
              <p className="route__time">09:52</p>
              <p className="route__date">31.08.2018</p>
            </div>
          </div>
          <div className="route">
            <div className="route__info">
              <p className="route__city">Москва</p>
              <p className="route__station">Курский {"\n"} вокзал</p>
            </div>
            <div className="route__info route__info--right">
              <p className="route__city">Санкт-Петербург</p>
              <p className="route__station">Ладожский {"\n"} вокзал</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar__inner">
        <div className="sidebar__header sidebar__header--passengers">
          <h4 className="title title--small sidebar__title">Пассажиры</h4>
          <button className="sidebar__button"></button>
        </div>
        <ul className="details__passenger-list">
          <li className="details__passenger-item">
            <span className="details__passenger-count">
              {passengersCount.adult} Взрослы
              {Number(passengersCount.adult) === 1 ? "й" : "х"}
            </span>
            <Currency
              title="details__passenger-price"
              value={passengersPrice.adult + passengersPrice.services}
            />
          </li>
          {Number(passengersCount.child) + Number(passengersCount.baby) > 0 && (
            <li className="details__passenger-item">
              <span className="details__passenger-count">
                {Number(passengersCount.child) + Number(passengersCount.baby)}{" "}
                Ребен
                {Number(passengersCount.child) +
                  Number(passengersCount.baby) ===
                1
                  ? "ок"
                  : "ка"}
              </span>
              <Currency
                title="details__passenger-price"
                value={passengersPrice.child}
              />
            </li>
          )}
        </ul>
      </div>

      <div className="details__footer">
        <h3 className="title title--small details_footer-title">Итог</h3>
        <Currency
          title="details__footer-total"
          value={
            passengersPrice.adult +
            passengersPrice.child +
            passengersPrice.services
          }
        />
      </div>
    </section>
  );
}

export default Details;
