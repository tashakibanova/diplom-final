import {
  TRAIN_LIST_REQUEST,
  TRAIN_LIST_FAILURE,
  TRAIN_LIST_SUCCESS,
  TRAIN_ITEM_CHANGE,
} from "./types.js";

const initialState = {
  trainList: [],
  train: JSON.parse(localStorage.getItem("train")) || null,
  count: 0,
  loading: false,
  error: null,
};

export default function trainReducer(state = initialState, action) {
  switch (action.type) {
    case TRAIN_LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case TRAIN_LIST_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error };
    case TRAIN_LIST_SUCCESS:
      const { count, trainList } = action.payload;
      return { ...state, count, trainList, loading: false, error: null };
    case TRAIN_ITEM_CHANGE:
      const { train } = action.payload;
      localStorage.setItem("train", JSON.stringify(train));
      return { ...state, train };
    default:
      return state;
  }
}
