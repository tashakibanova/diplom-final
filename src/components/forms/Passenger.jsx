import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPassengersData } from "../../redux/passengers/actions";
import "./Passenger.css";
import validateDocument from "../../functions/validateDocument";

function Passenger({ number, type }) {
  const [docType, setDocType] = useState(
    type === "adult" ? "passport" : "certificate"
  );
  const [active, setActive] = useState(false);
  const [form, setForm] = useState({
    number: number,
    type: type,
    surname: "",
    name: "",
    lastname: "",
    sex: "",
    birth: "",
    series: "",
    document: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadio = (event) => {
    setForm((prev) => ({ ...prev, sex: event.target.dataset.id }));
  };

  const handleShow = () => {
    setActive((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      form.surname.trim() &&
      form.name.trim() &&
      form.lastname.trim() &&
      form.sex &&
      form.birth &&
      (!form.series ||
        (form.series && validateDocument("series", form.series))) &&
      validateDocument(type, form.document)
    ) {
      dispatch(addPassengersData(number, form));
    }
  };

  return (
    <section className="card passenger">
      <div
        className={`card__title passenger__header ${
          active ? "" : "passenger__header--hide"
        }`}
      >
        <h4 className="title title--small passenger__title">
          <span
            className={`passenger__toggle ${
              active ? "passenger__toggle--hide" : "passenger__toggle--show"
            }`}
            onClick={handleShow}
          ></span>
          Пассажир {number}
        </h4>
        <button className="passenger__delete-button"></button>
      </div>
      <div
        className={`passenger__form ${active ? "passenger__form--active" : ""}`}
      >
        <div className="passenger__form-section">
          <select
            className="card__form-field passenger__form-list"
            defaultValue={type}
            disabled
          >
            <option className="passenger__form-item" value="adult">
              Взрослый
            </option>
            <option className="passenger__form-item" value="child">
              Детский
            </option>
          </select>
          <div className="passenger__form-controls">
            <label
              className="card__form-title passenger__form-title"
              htmlFor={`surname${number}`}
            >
              Фамилия
              <input
                className="card__form-field passenger__form-field passenger__form-field--name"
                id={`surname${number}`}
                type="text"
                name="surname"
                value={form.surname}
                onChange={handleChange}
              />
            </label>
            <label
              className="card__form-title passenger__form-title"
              htmlFor={`name${number}`}
            >
              Имя
              <input
                className="passenger__form-field passenger__form-field--name card__form-field"
                id={`name${number}`}
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label
              className="card__form-title passenger__form-title"
              htmlFor={`lastname${number}`}
            >
              Отчество
              <input
                className="card__form-field passenger__form-field passenger__form-field--name"
                id={`lastname${number}`}
                type="text"
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="passenger__form-controls">
            <div className="passenger__radio-group">
              <p className="card__form-title passenger__form-title">Пол</p>
              <div className="passenger__radio-controls">
                <input
                  className="passenger__radio-field"
                  id={`male${number}`}
                  data-id="male"
                  name={`sex${number}`}
                  type="radio"
                  checked={form.sex === "male"}
                  onChange={handleRadio}
                />
                <label
                  className="passenger__radio-label passenger__radio-label--male"
                  htmlFor={`male${number}`}
                >
                  М
                </label>
                <input
                  className="passenger__radio-field"
                  id={`female${number}`}
                  data-id="female"
                  name={`sex${number}`}
                  type="radio"
                  checked={form.sex === "female"}
                  onChange={handleRadio}
                />
                <label
                  className="passenger__radio-label passenger__radio-label--female"
                  htmlFor={`female${number}`}
                >
                  Ж
                </label>
              </div>
            </div>
            <label
              className="card__form-title passenger__form-title"
              htmlFor={`birth${number}`}
            >
              Дата рождения
              <input
                className="card__form-field passenger__form-field"
                id={`birth${number}`}
                type="text"
                placeholder="ДД/ММ/ГГ"
                name="birth"
                value={form.birth}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="passenger__form-controls">
            <input className="passenger__checkbox" type="checkbox" />
            <p className="passenger__checkbox-text">ограниченная подвижность</p>
          </div>
        </div>
        <div className="passenger__form-section">
          <div className="passenger__docs">
            <label className="card__form-title passenger__form-title">
              Тип документа
              <select
                className={`card__form-field passenger__form-list passenger__form-list--${docType}`}
                value={docType}
                onChange={(event) => setDocType(event.target.value)}
              >
                <option className="passenger__form-item" value="passport">
                  Паспорт РФ
                </option>
                <option className="passenger__form-item" value="certificate">
                  Свидетельство о рождении
                </option>
              </select>
            </label>
            {docType === "passport" && (
              <label
                className="card__form-title passenger__form-title"
                htmlFor={`series${number}`}
              >
                Серия
                <input
                  className="card__form-field passenger__form-field passenger__form-field--docs"
                  id={`series${number}`}
                  type="text"
                  placeholder="_ _ _ _"
                  name="series"
                  value={form.series}
                  onChange={handleChange}
                />
              </label>
            )}
            <label
              className="card__form-title passenger__form-title"
              htmlFor={`document${number}`}
            >
              Номер
              <input
                className="card__form-field passenger__form-field passenger__form-field--docs"
                id={`document${number}`}
                type="text"
                placeholder={
                  docType === "passport" ? "_ _ _ _ _ _" : "12 символов"
                }
                name="document"
                value={form.document}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="passenger__form-footer">
          <button
            className="button passenger__form-button"
            onClick={handleSubmit}
          >
            Следующий пассажир
          </button>
        </div>
      </div>
    </section>
  );
}

export default Passenger;
