import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPayerData } from "../../redux/pay/actions";
import { progressStageChange } from "../../redux/progress/actions";
import "./PayForm.css";

function PayForm(props) {
  const [form, setForm] = useState({
    surname: "",
    name: "",
    lastname: "",
    phone: "",
    email: "",
    pay: "",
  });
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadio = (event) => {
    setForm((prev) => ({ ...prev, pay: event.target.id }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      form.surname &&
      form.name &&
      form.lastname &&
      form.phone &&
      form.email &&
      form.pay
    ) {
      dispatch(addPayerData(form));
      dispatch(progressStageChange(4));
      history.push("/order/verify");
    }
  };

  return (
    <form className="order__options pay-form" onSubmit={handleSubmit}>
      <section className="card">
        <h4 className="title title--small card__title">Персональные данные</h4>
        <div className="pay-form__wrapper">
          <div className="pay-form__form-controls pay-form__form-controls--name">
            <label
              className="card__form-title pay-form__form-title"
              htmlFor="surname"
            >
              Фамилия
              <input
                className="pay-form__form-field card__form-field"
                id="surname"
                name="surname"
                type="text"
                value={form.surname}
                onChange={handleChange}
              />
            </label>
            <label
              className="card__form-title pay-form__form-title"
              htmlFor="name"
            >
              Имя
              <input
                className="pay-form__form-field card__form-field"
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label
              className="card__form-title pay-form__form-title"
              htmlFor="last-name"
            >
              Отчество
              <input
                className="pay-form__form-field card__form-field"
                id="last-name"
                name="lastname"
                type="text"
                value={form.lastname}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="pay-form__form-controls pay-form__form-controls--contacts">
            <label
              className="card__form-title pay-form__form-title pay-form__form-title--contact"
              htmlFor="phone"
            >
              Контактный телефон
              <input
                className="card__form-field pay-form__form-field pay-form__form-field--contact"
                id="phone"
                name="phone"
                type="tel"
                placeholder="+7 ___ ___ __ __"
                value={form.phone}
                onChange={handleChange}
              />
            </label>
            <label
              className="card__form-title pay-form__form-title pay-form__form-title--contact"
              htmlFor="email"
            >
              E-mail
              <input
                className="card__form-field pay-form__form-field pay-form__form-field--contact"
                id="email"
                name="email"
                type="email"
                placeholder="inbox@gmail.ru"
                value={form.email}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <section className="pay-form__payment">
          <h4 className="title title--small card__title">Способ оплаты</h4>
          <div className="pay-form__controls-group">
            <input
              className="pay-form__form-control"
              type="radio"
              name="payment"
              id="online"
              checked={form.pay === "online"}
              onChange={handleRadio}
            />

            <label className="pay-form__controls-title" htmlFor="online">
              Онлайн
            </label>
            <ul className="pay-form__paylist">
              <li className="pay-form__pay-item">Банковской {"\n"} картой</li>
              <li className="pay-form__pay-item">PayPal</li>
              <li className="pay-form__pay-item">Visa QIWI Wallet</li>
            </ul>
          </div>
          <div className="pay-form__controls-group">
            <input
              className="pay-form__form-control"
              type="radio"
              name="payment"
              id="cash"
              checked={form.pay === "cash"}
              onChange={handleRadio}
            />

            <label className="pay-form__controls-title" htmlFor="cash">
              Наличными
            </label>
          </div>
        </section>
      </section>
      <div className="pay-form__buttons">
        <button className="button pay-form__button" type="submit">
          Купить билеты
        </button>
      </div>
    </form>
  );
}

export default PayForm;
