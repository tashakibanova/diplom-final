import React from "react";
import "./Reviews.css";
import woman from "../../img/icon/woman.jpg";
import man from "../../img/icon/man.jpg";

function Reviews(props) {
  return (
    <section className="reviews" id="reviews">
      <div className="wrapper">
        <h2 className="title title--middle reviews__title">Отзывы</h2>
        <div className="reviews__cards">
          <div className="reviews__card">
            <div className="reviews__card-icon">
              <img
                className="reviews__card-image"
                src={woman}
                alt="Екатерина Вальнова"
              />
            </div>
            <div className="reviews__card-inner">
              <p className="reviews__card-title">Екатерина Вальнова</p>
              <p className="reviews__card-content">
                Доброжелательные подсказки {"\n"}
                на всех этапах помогут правильно заполнить поля и без
                затруднений купить авиа или ж/д билет, даже если вы заказываете
                онлайн билет впервые.
              </p>
            </div>
          </div>
          <div className="reviews__card">
            <div className="reviews__card-icon">
              <img
                className="reviews__card-image"
                src={man}
                alt="Евгений Стрыкало"
              />
            </div>
            <div className="reviews__card-inner">
              <p className="reviews__card-title">Евгений Стрыкало</p>
              <p className="reviews__card-content">
                СМС-сопровождение до посадки {"\n"}
                Сразу после оплаты ж/д билетов {"\n"}и за 3 часа до отправления
                мы пришлем вам СМС-напоминание о поездке.
              </p>
            </div>
          </div>
        </div>
        <div className="reviews__slider">
          <button className="reviews__slider-button reviews__slider-button--active"></button>
          <button className="reviews__slider-button"></button>
          <button className="reviews__slider-button"></button>
          <button className="reviews__slider-button"></button>
          <button className="reviews__slider-button"></button>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
