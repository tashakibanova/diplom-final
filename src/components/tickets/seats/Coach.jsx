/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { passengersPriceChange } from "../../../redux/passengers/actions";
import "./Coach.css";
import LuxClass from "../classes/LuxClass";
import KupeClass from "../classes/KupeClass";
import PlatzcartClass from "../classes/PlatzcartClass";
import SeatsClass from "../classes/SeatsClass";
import Currency from "../../elements/Currency";
import Service from "../../elements/Service";

function Coach({ coach, seatsList }) {
  const { seats, services } = useSelector((state) => state.coach);
  const { passengersCount, passengersPrice } = useSelector(
    (state) => state.passengers
  );
  const dispatch = useDispatch();

  const calculatePrice = (el) => {
    if (type.kupe || type.platzcart) {
      if (el > 32) {
        return coach.side_price;
      } else if (el % 2 === 0) {
        return coach.top_price;
      } else {
        return coach.bottom_price;
      }
    } else if (type.seat) {
      if (el > 32) {
        return coach.bottom_price;
      } else {
        return coach.top_price;
      }
    }
    return coach.bottom_price;
  };

  useEffect(() => {
    if (seats[coach._id]) {
      const childPrice = seats[coach._id]
        .slice(0, passengersCount.child)
        .map((el) => calculatePrice(el) * 0.5)
        .reduce((acc, el) => acc + el, 0);

      const adultPrice = seats[coach._id]
        .slice(passengersCount.child)
        .map((el) => calculatePrice(el))
        .reduce((acc, el) => acc + el, 0);

      if (childPrice !== passengersPrice.child) {
        dispatch(passengersPriceChange("child", Math.floor(childPrice)));
      }
      if (adultPrice !== passengersPrice.adult) {
        dispatch(passengersPriceChange("adult", Math.floor(adultPrice)));
      }
    }
  }, [seats]);

  useEffect(() => {
    if (services[coach._id]) {
      const servicesPrice = services[coach._id]
        .map((el) => {
          if (coach[`${el}_price`]) {
            return coach[`${el}_price`];
          }
          return 0;
        })
        .reduce((acc, el) => acc + el, 0);
      if (servicesPrice !== passengersPrice.services) {
        dispatch(passengersPriceChange("services", Math.floor(servicesPrice)));
      }
    }
  }, [services]);

  const type = {
    lux: coach.class_type === "first",
    kupe: coach.class_type === "second",
    platzcart: coach.class_type === "third",
    seat: coach.class_type === "fourth",
  };

  return (
    <div className="coach">
      <div className="coach-info">
        <div className="coach-info-header">
          <p className="coach-number">{coach._id.toString().slice(-2)}</p>
          <p className="coach-title">вагон</p>
        </div>
        <div className="coach-info-card coach-info-card--seats">
          <h5 className="coach-info-title">
            Места{" "}
            <span className="coach-info-count">{coach.available_seats}</span>
          </h5>
          {!type.lux && (
            <>
              <p className="coach-info-text">
                Верхние{" "}
                <strong>
                  {type.kupe &&
                    seatsList.filter((el) => el.index % 2 === 0).length}
                  {type.platzcart &&
                    seatsList.filter(
                      (el) => el.index % 2 === 0 && el.index < 33
                    ).length}
                  {type.seat && (seatsList.length < 32 ? seatsList.length : 32)}
                </strong>
              </p>
              <p className="coach-info-text">
                Нижние{" "}
                <strong>
                  {type.kupe &&
                    seatsList.filter((el) => el.index % 2 !== 0).length}
                  {type.platzcart &&
                    seatsList.filter(
                      (el) => el.index % 2 !== 0 && el.index < 33
                    ).length}
                  {type.seat && seatsList.length - 32}
                </strong>
              </p>
            </>
          )}
          {type.platzcart && (
            <p className="coach-info-text">
              Боковые{" "}
              <strong>{seatsList.filter((el) => el.index > 32).length}</strong>
            </p>
          )}
        </div>
        <div className="coach-info-card coach-info-card--price">
          <h5 className="coach-info-title">Стоимость</h5>
          {!type.lux && (
            <p className="coach-info-text">
              <Currency title="coach-info" value={coach.top_price} />
            </p>
          )}
          <p className="coach-info-text">
            <Currency title="coach-info" value={coach.bottom_price} />
          </p>
          {type.platzcart && (
            <p className="coach-info-text">
              <Currency title="coach-info" value={coach.side_price} />
            </p>
          )}
        </div>
        <div className="coach-info-card coach-info-card--services">
          <h5 className="coach-info-title">Обслуживание ФПК</h5>
          <div className="coach-services">
            {coach.have_air_conditioning && (
              <Service type="air" id={coach._id} />
            )}
            {coach.have_wifi && <Service type="wifi" id={coach._id} />}
            {coach.linens_price !== 0 && (
              <Service
                type="linens"
                id={coach._id}
                disabled={coach.is_linens_included}
              />
            )}
            {<Service type="food" id={coach._id} />}
          </div>
        </div>
      </div>
      <div className="coach-inner">
        <div className="coach-demand">
          {seatsList.filter((el) => el.available === false).length} человек
          выбирают места в этом поезде
        </div>
        {type.lux && <LuxClass id={coach._id} seatsList={seatsList} />}
        {type.kupe && <KupeClass id={coach._id} seatsList={seatsList} />}
        {type.platzcart && (
          <PlatzcartClass id={coach._id} seatsList={seatsList} />
        )}
        {type.seat && <SeatsClass id={coach._id} seatsList={seatsList} />}
        {passengersPrice.child +
          passengersPrice.adult +
          passengersPrice.services >
          0 && (
          <div className="coach-total">
            <Currency
              title="coach-total"
              value={
                passengersPrice.child +
                passengersPrice.adult +
                passengersPrice.services
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Coach;
