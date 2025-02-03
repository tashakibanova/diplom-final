import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../img/logo/logo.svg";
import Nav from "./Nav";

function Header(props) {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo header__logo">
          <Link className="header__logo-link" to="/">
            <img className="header__logo-icon" src={logo} alt="Лого" />
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
