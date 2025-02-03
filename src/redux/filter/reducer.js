import { FILTER_VALUE_CHANGE } from "./types.js";

const initialState = {
  filter: JSON.parse(localStorage.getItem("filter")) || {
    fromСityId: "",
    toCityId: "",
    dateStart: "",
    dateEnd: "",
    lux: false,
    kupe: false,
    platzcart: false,
    seat: false,
    wifi: false,
    express: false,
    price: {
      from: 0,
      to: 9000,
    },
    startDeparture: {
      from: 0,
      to: 24,
    },
    startArrival: {
      from: 0,
      to: 24,
    },
    endDeparture: {
      from: 0,
      to: 24,
    },
    endArrival: {
      from: 0,
      to: 24,
    },
    limit: 10,
    offset: 0,
    sort: "date",
  },
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_VALUE_CHANGE:
      const { name, value } = action.payload;
      localStorage.setItem(
        "filter",
        JSON.stringify({ ...state.filter, [name]: value })
      );
      return { ...state, filter: { ...state.filter, [name]: value } };
    default:
      return state;
  }
}
