import {
  SEARCH_FIELD_CHANGE,
  SEARCH_FIELD_SWAP,
  SEARCH_FIELD_CLEAR,
} from "./types.js";

const initialState = {
  dateStart: "",
  dateEnd: "",
  routeStart: {
    id: "",
    city: "",
  },
  routeEnd: {
    id: "",
    city: "",
  },
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_FIELD_CHANGE:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case SEARCH_FIELD_SWAP:
      const { routeStart, routeEnd } = action.payload;
      return {
        ...state,
        routeStart: routeEnd,
        routeEnd: routeStart,
      };
    case SEARCH_FIELD_CLEAR:
      return initialState;
    default:
      return state;
  }
}
