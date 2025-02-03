import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  serviceItemSelect,
  serviceItemUnselect,
} from "../../redux/coach/actions";

function Service({ type, id, disabled }) {
  const { services } = useSelector((state) => state.coach);
  const dispatch = useDispatch();

  const handleClick = (service) => {
    if (services[id] && services[id].includes(service)) {
      dispatch(serviceItemUnselect(id, service));
    } else {
      dispatch(serviceItemSelect(id, service));
    }
  };

  return (
    <button
      className={`service ${type}-service ${
        services[id] && services[id].includes(type)
          ? `service--active ${type}-service--active`
          : ""
      }`}
      onClick={() => handleClick(type)}
      disabled={disabled}
    ></button>
  );
}

export default Service;
