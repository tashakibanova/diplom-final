import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SuccessOrderPage.css";
import sendTickets from "../../img/cards/send-tickets.svg";
import printTickets from "../../img/cards/print-tickets.svg";
import conductor from "../../img/cards/conductor.svg";
import rating from "../../img/elements/rating.svg";
import SuccessIntro from "../intro/SuccessIntro";
import Currency from "../elements/Currency";

function SuccessOrderPage(props) {
  const { passengersPrice } = useSelector((state) => state.passengers);
  const { payer } = useSelector((state) => state.pay);
  const history = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <>
      <SuccessIntro />
      <div className="wrapper">
        <div className="success-order">
          <div className="success-order__header">
            <p className="success-order__title">№Заказа 285АА</p>
            <p className="success-order__price">
              сумма{" "}
              <Currency
                title="success-order"
                value={
                  passengersPrice.adult +
                  passengersPrice.child +
                  passengersPrice.services
                }
              />
            </p>
          </div>

          <div className="success-order__instructions">
            <div className="success-order__instructions-wrapper">
              <div className="success-order__instruction">
                <div className="success-order__instruction-icon">
                  <img
                    className="success-order__instruction-image"
                    src={sendTickets}
                    alt="билеты будут отправлены
                    на ваш e-mail"
                  />
                </div>
                <p className="success-order__instruction-text">
                  билеты будут отправлены на ваш <strong>e-mail</strong>
                </p>
              </div>
              <div className="success-order__instruction">
                <div className="success-order__instruction-icon">
                  <img
                    className="success-order__instruction-image"
                    src={printTickets}
                    alt="распечатайте
                    и сохраняйте билеты
                    до даты поездки"
                  />
                </div>
                <p className="success-order__instruction-text">
                  <strong>распечатайте </strong>и сохраняйте билеты до даты
                  поездки
                </p>
              </div>
              <div className="success-order__instruction">
                <div className="success-order__instruction-icon">
                  <img
                    className="success-order__instruction-image"
                    src={conductor}
                    alt="предьявите распечатанные
                    билеты при посадке"
                  />
                </div>
                <p className="success-order__instruction-text">
                  <strong>предьявите </strong>
                  распечатанные билеты при посадке
                </p>
              </div>
            </div>
          </div>
          <section className="success-order__message">
            <h3 className="success-order__message-title">
              {payer.name} {payer.lastname}!
            </h3>
            <p className="success-order__message-text">
              Ваш заказ успешно оформлен. {"\n"} В ближайшее время с вами
              свяжется наш оператор для подтверждения.
            </p>
            <p className="success-order__message-text">
              <strong>
                Благодарим Вас за оказанное доверие и желаем приятного
                путешествия!
              </strong>
            </p>
          </section>
          <div className="success-order__footer">
            <div className="success-order__footer-form">
              <p className="success-order__footer-title">Оценить сервис</p>
              <div className="success-order__footer-icons">
                <img
                  className="success-order__footer-icon"
                  src={rating}
                  alt="Оценить сервис"
                />
              </div>
            </div>
            <button
              className="button success-order__footer-button"
              onClick={handleClick}
            >
              Вернуться на главную
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessOrderPage;
