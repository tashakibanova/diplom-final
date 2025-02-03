import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../img/logo/logo.svg";
import {
  phone,
  email,
  skype,
  address,
  youtube,
  lindekin,
  google,
  facebook,
  twitter,
  scroll,
} from "../svg";
import FooterForm from "./FooterForm";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer___content">
        <div className="wrapper">
          <div className="footer__wrapper">
            <section
              className="footer__section footer__section--contacts"
              id="contacts"
            >
              <h3 className="footer__section-title">Свяжитесь с нами</h3>
              <ul className="footer__contacts-list">
                <li className="footer__contacts-item">
                  {phone}
                  <p className="footer__contacts-text">8 (800) 000 00 00</p>
                </li>
                <li className="footer__contacts-item">
                  {email}
                  <p className="footer__contacts-text">inbox@mail.ru</p>
                </li>
                <li className="footer__contacts-item">
                  {skype}
                  <p className="footer__contacts-text">tu.train.tickets</p>
                </li>
                <li className="footer__contacts-item">
                  {address}
                  <p className="footer__contacts-text">
                    г. Москва ул. Московская 27-35 555 555
                  </p>
                </li>
              </ul>
            </section>
            <section className="footer__section footer__section--subscription">
              <h3 className="footer__section-title">Подписка</h3>
              <FooterForm />
            </section>
            <section className="footer__section footer__section--socials">
              <h3 className="footer__section-title">Подписывайтесь на нас</h3>
              <ul className="footer__socials">
                <li className="footer__socials-item">
                  <Link className="footer__social-link" to="#">
                    {youtube}
                  </Link>
                </li>
                <li className="footer__socials-item">
                  <Link className="footer__social-link" to="#">
                    {lindekin}
                  </Link>
                </li>
                <li className="footer__socials-item">
                  <Link className="footer__social-link" to="#">
                    {google}
                  </Link>
                </li>
                <li className="footer__socials-item">
                  <Link className="footer__social-link" to="#">
                    {facebook}
                  </Link>
                </li>
                <li className="footer__socials-item">
                  <Link className="footer__social-link" to="#">
                    {twitter}
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="footer__logo-wrapper">
          <div className="logo footer__logo">
            <Link className="footer__logo-link" to="/">
              <img className="footer__logo-icon" src={logo} alt="Лого" />
            </Link>
          </div>
          <div className="footer__button">{scroll}</div>
          <div className="footer__copyright">
            <p className="footer__copyright-text">2018 WEB</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
