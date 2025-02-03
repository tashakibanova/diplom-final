import React from "react";
import Filter from "./filter/Filter";
import Latest from "./latest/Latest";

function OrderSidebar(props) {
  return (
    <div className="order__sidebar">
      <Filter />
      <Latest />
    </div>
  );
}

export default OrderSidebar;
