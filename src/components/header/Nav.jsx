import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Nav.css";

function Nav(props) {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <HashLink className="header__nav-link" to="/#about">
            О нас
          </HashLink>
        </li>
        <li className="header__nav-item">
          <HashLink className="header__nav-link" to="/#faq">
            Как это работает
          </HashLink>
        </li>
        <li className="header__nav-item">
          <HashLink className="header__nav-link" to="/#reviews">
            Отзывы
          </HashLink>
        </li>
        <li className="header__nav-item">
          <HashLink className="header__nav-link" to="/#contacts">
            Контакты
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
