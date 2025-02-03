import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { progressStageChange } from "../../redux/progress/actions";
import "./VerificationForm.css";
import { passenger } from "../svg";
import Train from "../tickets/trains/Train";
import Currency from "../elements/Currency";

function VerificationForm(props) {
  const { train } = useSelector((state) => state.train);
  const { passengers, passengersPrice } = useSelector(
    (state) => state.passengers
  );
  const { payer } = useSelector((state) => state.pay);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handlePassengers = (event) => {
    event.preventDefault();
    dispatch(progressStageChange(2));
    history.push("/order/passengers");
  };

  const handlePay = (event) => {
    event.preventDefault();
    dispatch(progressStageChange(3));
    history.push("/order/pay");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/success");
  };

  return (
    <form className="verification__form">
      <section className="card verification__card">
        <h4 className="title title--small card__title verification__card-title">
          Поезд
        </h4>
        <Train train={train} option="verification" />
      </section>
      <section className="card verification__card">
        <h4 className="title title--small card__title verification__card-title">
          Пассажиры
        </h4>
        <div className="verification__card-wrapper">
          <div className="verification__card-content">
            {passengers.map((el, index) => (
              <div className="passenger__card" key={index}>
                <div className="passenger__card-header">
                  {passenger}
                  <h5 className="passenger__card-title">
                    {el.type === "adult" ? "Взрослый" : "Детский"}
                  </h5>
                </div>
                <div className="passenger__card-content">
                  <h6 className="passenger__card-content-title">
                    {el.surname.trim()} {el.name.trim()} {el.lastname.trim()}
                  </h6>
                  <p className="passenger__card-content-text">
                    Пол {el.sex === "male" ? "мужской" : "женский"}
                  </p>
                  <p className="passenger__card-content-text">
                    Дата рождения {el.birth}
                  </p>
                  <p className="passenger__card-content-text">
                    {el.type === "adult"
                      ? `Паспорт РФ  ${el.series} ${el.document}`
                      : `Свидетельство о рождении ${el.document}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="verification__card-actions">
            <div className="verification__total-wrapper">
              <p className="verification__total-name">Всего</p>
              <Currency
                title="verification__total-price"
                value={
                  passengersPrice.child +
                  passengersPrice.adult +
                  passengersPrice.services
                }
              />
            </div>
            <button
              className="button verification__button"
              onClick={handlePassengers}
            >
              Изменить
            </button>
          </div>
        </div>
      </section>
      <section className="card verification__card">
        <h4 className="title title--small card__title verification__card-title">
          Способ оплаты
        </h4>
        <div className="verification__card-wrapper">
          <div className="verification__card-content">
            <p className="verification__payment">
              {payer.pay === "cash" ? "Наличными" : "Онлайн"}
            </p>
          </div>
          <div className="verification__card-actions">
            <button className="button verification__button" onClick={handlePay}>
              Изменить
            </button>
          </div>
        </div>
      </section>
      <div className="verification__form-buttons">
        <button
          className="button verification__form-button"
          onClick={handleSubmit}
        >
          Подтвердить
        </button>
      </div>
    </form>
  );
}

export default VerificationForm;
