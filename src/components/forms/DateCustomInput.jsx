import React from "react";

function DateCustomInput(props) {
  return (
    <input
      className={`search-form__field search-form__field--date ${
        props.form ? `${props.form}-field` : ""
      }`}
      type="text"
      placeholder="ДД/ММ/ГГ"
      value={props.value}
      onChange={props.onClick}
      onClick={props.onClick}
    />
  );
}

export default DateCustomInput;
