import {
  PASSENGERS_COUNT_CHANGE,
  PASSENGERS_PRICE_CHANGE,
  ADD_PASSENGERS_DATA,
} from "./types.js";

const initialState = {
  passengersCount: {
    adult: 0,
    child: 0,
    baby: 0,
  },
  passengersPrice: {
    adult: 0,
    child: 0,
    services: 0,
  },
  passengers: [],
};

export default function passengersReducer(state = initialState, action) {
  switch (action.type) {
    case PASSENGERS_COUNT_CHANGE: {
      const { type, count } = action.payload;
      return {
        ...state,
        passengersCount: { ...state.passengersCount, [type]: count },
      };
    }
    case PASSENGERS_PRICE_CHANGE: {
      const { type, price } = action.payload;
      return {
        ...state,
        passengersPrice: { ...state.passengersPrice, [type]: price },
      };
    }

    case ADD_PASSENGERS_DATA:
      const { index, data } = action.payload;
      if (state.passengers.filter((el) => el.number === index).length > 0) {
        return {
          ...state,
          passengers: state.passengers.map((el) =>
            el.number === index ? data : el
          ),
        };
      } else {
        return { ...state, passengers: [...state.passengers, data] };
      }
    default:
      return state;
  }
}
