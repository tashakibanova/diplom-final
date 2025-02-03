import { ADD_PAYER_DATA } from "./types.js";

const initialState = {
  payer: null,
};

export default function payReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PAYER_DATA:
      const { payer } = action.payload;
      return { ...state, payer };
    default:
      return state;
  }
}
