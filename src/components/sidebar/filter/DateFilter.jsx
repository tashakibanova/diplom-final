import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./DateFilter.css";
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";
import DateCustomInput from "../../forms/DateCustomInput";
import { filterValueChange } from "../../../redux/filter/actions";

function DateFilter(props) {
  const { filter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <DateCustomInput
      form="filter__date"
      value={value}
      onClick={onClick}
      forwardedRef={ref}
    />
  ));

  const handleChange = (name, value) => {
    dispatch(filterValueChange(name, value));
  };

  return (
    <form className="filter__date">
      <label className="title title--small filter__date-title">
        Дата поездки
        <DatePicker
          locale={ru}
          dateFormat="dd.MM.yyyy"
          selected={filter.dateStart}
          selectsStart
          startDate={filter.dateStart}
          endDate={filter.dateEnd}
          customInput={<CustomInput />}
          onChange={(date) => handleChange("dateStart", date)}
        />
      </label>
      <label className="title title--small filter__date-title">
        Дата возвращения
        <DatePicker
          locale={ru}
          dateFormat="dd.MM.yyyy"
          selected={filter.dateEnd}
          selectsEnd
          startDate={filter.dateStart}
          endDate={filter.dateEnd}
          minDate={filter.dateStart}
          customInput={<CustomInput />}
          onChange={(date) => handleChange("dateEnd", date)}
        />
      </label>
    </form>
  );
}

export default DateFilter;
