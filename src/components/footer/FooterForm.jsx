import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { subscriptionFieldChange } from "../../redux/subscription/actions";
import { subscriptionFetch } from "../../redux/utils/api";
import "./FooterForm.css";

function FooterForm(props) {
  const { email } = useSelector((state) => state.subscription);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(subscriptionFieldChange(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email) {
      dispatch(subscriptionFetch(email));
    }
  };

  return (
    <form className="footer__form" onSubmit={handleSubmit}>
      <label className="footer__form-description" htmlFor="subscription">
        Будьте в курсе событий
        <input
          className="footer__form-field"
          id="subscription"
          name="email"
          type="email"
          placeholder="e-mail"
          value={email}
          onChange={handleChange}
        />
      </label>
      <button className="button footer__form-button">Отправить</button>
    </form>
  );
}

export default FooterForm;
