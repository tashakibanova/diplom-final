import React from "react";
import "./OrderIntro.css";
import SearchForm from "../forms/SearchForm";
import ProgressBar from "./ProgressBar";

function OrderIntro(props) {
  return (
    <div className="order__intro">
      <SearchForm form="order__form" />
      <ProgressBar />
    </div>
  );
}

export default OrderIntro;
