import React from "react";
import "./About.css";

function About(props) {
  return (
    <section className="about" id="about">
      <div className="wrapper">
        <h2 className="title title--middle about__title">О нас</h2>
        <div className="about__inner">
          <p className="about__content">
            Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы
            наблюдаем, как с каждым днем все больше людей заказывают жд билеты
            через интернет.
          </p>
          <p className="about__content">
            Сегодня можно заказать железнодорожные билеты онлайн всего в 2
            клика, но стоит ли это делать? Мы расскажем о преимуществах заказа
            через интернет.
          </p>
          <p className="about__content">
            <strong>
              Покупать жд билеты дешево можно за 90 суток до отправления поезда.
              {"\n"} Благодаря динамическому ценообразованию цена на билеты в
              это время самая низкая.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
