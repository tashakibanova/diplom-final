import React from "react";
import "./Intro.css";
import SearchForm from "../forms/SearchForm";

function Intro(props) {
  return (
    <section className="intro">
      <div className="wrapper">
        <div className="intro__wrapper">
          <h1 className="title title--large intro__title">
            <span className="intro__subtitle">Вся жизнь -</span> путешествие!
          </h1>
          <SearchForm form="intro__form" />
        </div>
      </div>
    </section>
  );
}

export default Intro;
