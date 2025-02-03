import React from "react";
import { useSelector } from "react-redux";
import "./ProgressBar.css";

function OrderProgress(props) {
  const { stage } = useSelector((state) => state.progress);

  const stages = ["Билеты", "Пассажиры", "Оплата", "Проверка"];

  return (
    <ul className="order__progress-list">
      {stages.map((el, index) => (
        <li
          className={`order__progress-item ${
            stage > index ? "order__progress-item--active" : ""
          }`}
          key={index}
        >
          <span className="order__progress-icon">
            <span className="order__progress-stage">{index + 1}</span>
          </span>
          {el}
        </li>
      ))}
    </ul>
  );
}

export default OrderProgress;
