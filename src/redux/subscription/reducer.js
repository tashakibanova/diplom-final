import {
  SUBSCRIPTION_FIELD_CHANGE,
  SUBSCRIPTION_REQUEST,
  SUBSCRIPTION_FAILURE,
  SUBSCRIPTION_SUCCESS,
} from "./types.js";

const initialState = {
  email: "",
  loading: false,
  error: null,
};

export default function subscriptionReducer(state = initialState, action) {
  switch (action.type) {
    case SUBSCRIPTION_FIELD_CHANGE:
      const { email } = action.payload;
      return { ...state, email };
    case SUBSCRIPTION_REQUEST:
      return { ...state, error: null, loading: true };
    case SUBSCRIPTION_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error };
    case SUBSCRIPTION_SUCCESS:
      return initialState;
    default:
      return state;
  }
}
