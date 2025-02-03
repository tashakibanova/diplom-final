import React, { useState, useEffect } from "react";
import "./Latest.css";
import LatestTicket from "./LatestTicket";

function Latest(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fe-diplom.herokuapp.com/routes/last")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <aside className="latest">
      <h3 className="title title--small latest__title">Последние билеты</h3>
      <div className="latest__list">
        {items.map((item) => (
          <LatestTicket
            key={item.departure._id}
            ticket={item}
          />
        ))}
      </div>
    </aside>
  );
}

export default Latest;
