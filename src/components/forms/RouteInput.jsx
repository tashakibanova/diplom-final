import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function RouteInput(props) {
  const { routeStart, routeEnd } = useSelector((state) => state.search);
  const [cities, setCities] = useState([]);
  const [visible, setVisible] = useState(false);
  const route = props.name === "routeStart" ? routeStart.city : routeEnd.city;

  useEffect(() => {
    let controller = new AbortController();
    fetch(
      `https://fe-diplom.herokuapp.com/routes/cities?name=${
        route ? route : "А"
      }`,
      {
        signal: controller.signal,
      }
    )
      .then((response) => response.json())
      .then((data) => setCities(data));
    return () => controller.abort();
  }, [route]);

  const handleBlur = (event) => {
    event.preventDefault();
    setTimeout(() => setVisible(false), 1000);
  };

  return (
    <div className="search-form__route-container">
      <input
        className={`search-form__field search-form__field--route ${
          props.form ? `${props.form}-field` : ""
        }`}
        type="text"
        placeholder={props.placeholder ? props.placeholder : ""}
        value={route}
        onChange={(event) =>
          props.onChange(props.name, { id: "", city: event.target.value })
        }
        onClick={() => setVisible(true)}
        onBlur={handleBlur}
      />
      {visible && (
        <div className="autocomplete-list">
          {cities.length > 0 ? (
            cities.map((city) => (
              <p
                className="autocomplete-item"
                key={city._id}
                onClick={() =>
                  props.onChange(props.name, { id: city._id, city: city.name })
                }
              >
                {city.name}
              </p>
            ))
          ) : (
            <p className="autocomplete-item">Направление не найдено</p>
          )}
        </div>
      )}
    </div>
  );
}

export default RouteInput;
