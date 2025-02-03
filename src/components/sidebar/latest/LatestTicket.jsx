import React from "react";
import { useDispatch } from "react-redux";
import { filterValueChange } from "../../../redux/filter/actions";
import "./LatestTicket.css";
import { wifi, express, food } from "../../svg";
import Currency from "../../elements/Currency";

function LatestTicket({ ticket }) {
  const dispatch = useDispatch();

  const handleClick = (from, to) => {
    dispatch(filterValueChange("fromСityId", from));
    dispatch(filterValueChange("toCityId", to));
  };

  return (
    <div
      className="latest__ticket"
      onClick={() =>
        handleClick(
          ticket.departure.from.city._id,
          ticket.departure.to.city._id
        )
      }
    >
      <div className="latest__header">
        <h4 className="latest__ticket-title latest__ticket-title--departure">
          {ticket.departure.from.city.name}
          {"\n"}
          <span className="latest__ticket-subtitle">
            {ticket.departure.from.railway_station_name} {"\n вокзал"}
          </span>
        </h4>
        <h4 className="latest__ticket-title latest__ticket-title--arrival">
          {ticket.departure.to.city.name}
          {"\n"}
          <span className="latest__ticket-subtitle">
            {ticket.departure.to.railway_station_name} {"\n вокзал"}
          </span>
        </h4>
      </div>
      <div className="latest__info">
        <div className="latest__options">
          {ticket.departure.have_wifi && wifi("latest__options-icon")}
          {ticket.departure.is_express && express("latest__options-icon")}
          {food("latest__options-icon")}
        </div>
        <div className="latest__price-range">
          <span className="latest__price">
            от{" "}
            <Currency
              title="latest__price"
              value={ticket.departure.min_price}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default LatestTicket;
