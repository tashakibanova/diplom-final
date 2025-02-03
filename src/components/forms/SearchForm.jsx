import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";
import {
  searchFieldChange,
  searchFieldSwap,
  searchFieldClear,
} from "../../redux/search/actions";
import { filterValueChange } from "../../redux/filter/actions";
import "./SearchForm.css";
import RouteInput from "./RouteInput";
import DateCustomInput from "./DateCustomInput";

function SearchForm(props) {
  const { dateStart, dateEnd, routeStart, routeEnd } = useSelector(
    (state) => state.search
  );
  const dispatch = useDispatch();
  const history = useNavigate();

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <DateCustomInput
      form={props.form}
      forwardedRef={ref}
      value={value}
      onClick={onClick}
    />
  ));

  const handleChange = (name, value) => {
    dispatch(searchFieldChange(name, value));
  };

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(searchFieldSwap(routeStart, routeEnd));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (routeStart.id && routeEnd.id) {
      if (dateStart) {
        dispatch(filterValueChange("dateStart", dateStart));
      }
      if (dateEnd) {
        dispatch(filterValueChange("dateEnd", dateEnd));
      }
      dispatch(filterValueChange("fromСityId", routeStart.id));
      dispatch(filterValueChange("toCityId", routeEnd.id));
      dispatch(searchFieldClear());
      history.push("/order/tickets/train");
    }
  };

  return (
    <form className={`search-form ${props.form}`} onSubmit={handleSubmit}>
      <div className={`search-form__wrapper ${props.form}-wrapper`}>
        <div className="search-form__fieldset">
          <p className={`search-form__title ${props.form}-title`}>
            Направление
          </p>
          <div className="search-form__controls">
            <RouteInput
              form={props.form}
              name="routeStart"
              placeholder="Откуда"
              onChange={handleChange}
            />
            <button
              className="search-form__swap"
              onClick={handleClick}
            ></button>
            <RouteInput
              form={props.form}
              name="routeEnd"
              placeholder="Куда"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="search-form__fieldset">
          <p className={`search-form__title ${props.form}-title`}>Дата</p>
          <div className="search-form__controls">
            <DatePicker
              locale={ru}
              dateFormat="dd.MM.yyyy"
              selected={dateStart}
              selectsStart
              startDate={dateStart}
              endDate={dateEnd}
              customInput={<CustomInput />}
              onChange={(date) => handleChange("dateStart", date)}
            />
            <DatePicker
              locale={ru}
              dateFormat="dd.MM.yyyy"
              selected={dateEnd}
              selectsEnd
              startDate={dateStart}
              endDate={dateEnd}
              minDate={dateStart}
              customInput={<CustomInput />}
              onChange={(date) => handleChange("dateEnd", date)}
            />
          </div>
        </div>
        <div className={`search-form__buttons ${props.form}-buttons`}>
          <button className="button search-form__button">Найти билеты</button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
