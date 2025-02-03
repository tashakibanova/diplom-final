import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Paginator.css";

function Paginator(props) {
  const [pages, setPages] = useState([]);
  const { filter } = useSelector((state) => state.filter);
  const { count } = useSelector((state) => state.train);

  useEffect(() => {
    const arr = [];
    for (let i = 1; i <= Math.ceil(count / filter.limit); i++) {
      arr.push(i);
    }
    setPages(arr);
  }, [count, filter.limit]);

  return (
    <>
      <button className="paginator-button paginator-button--prev"></button>
      <ul className="paginator-list">
        {pages.length < 5 ? (
          pages.map((el) => (
            <li className="paginator-item" key={el}>
              {el}
            </li>
          ))
        ) : (
          <>
            {pages.slice(0, 3).map((el) => (
              <li className="paginator-item" key={el}>
                {el}
              </li>
            ))}
            <li className="paginator-item" key={0}>
              ...
            </li>
            {pages.slice(-1).map((el) => (
              <li className="paginator-item" key={el}>
                {el}
              </li>
            ))}
          </>
        )}
      </ul>
      <button className="paginator-button paginator-button--next"></button>
    </>
  );
}

export default Paginator;
