import React from "react";
import "./SuccessIntro.css";

function SuccessIntro(props) {
  return (
    <section className="success-intro">
      <div className="wrapper">
        <h1 className="title title--large success-intro__title">
          Благодарим Вас за заказ!
        </h1>
      </div>
    </section>
  );
}

export default SuccessIntro;
