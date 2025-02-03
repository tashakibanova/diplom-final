import React from "react";
import { Link } from "react-router-dom";
import "./Faq.css";
import online from "../../img/cards/online.svg";
import office from "../../img/cards/office.svg";
import travel from "../../img/cards/travel.svg";

function Faq(props) {
  return (
    <section className="faq" id="faq">
      <div className="wrapper">
        <div className="faq__header">
          <h2 className="title title--middle faq__title">Как это работает</h2>
          <Link className="button faq__link" to="/">
            Узнать больше
          </Link>
        </div>
        <div className="faq__cards">
          <div className="faq__card">
            <div className="faq__card-icon">
              <img
                className="faq__card-image"
                src={online}
                alt="Удобный заказ на сайте"
              />
            </div>
            <p className="faq__card-content">Удобный заказ на сайте</p>
          </div>
          <div className="faq__card">
            <div className="faq__card-icon">
              <img
                className="faq__card-image"
                src={office}
                alt="Нет необходимости ехать в офис"
              />
            </div>
            <p className="faq__card-content">Нет необходимости ехать в офис</p>
          </div>
          <div className="faq__card">
            <div className="faq__card-icon">
              <img
                className="faq__card-image"
                src={travel}
                alt="Огромный выбор направлений"
              />
            </div>
            <p className="faq__card-content">Огромный выбор направлений</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
