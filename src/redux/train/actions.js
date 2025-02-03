import {
  TRAIN_LIST_REQUEST,
  TRAIN_LIST_FAILURE,
  TRAIN_LIST_SUCCESS,
  TRAIN_ITEM_CHANGE,
} from "./types.js";

export function trainListRequest() {
  return { type: TRAIN_LIST_REQUEST };
}

export function trainListFailure(error) {
  return { type: TRAIN_LIST_FAILURE, payload: { error } };
}

export function trainListSuccess(count, trainList) {
  return { type: TRAIN_LIST_SUCCESS, payload: { count, trainList } };
}

export function trainItemChange(train) {
  return { type: TRAIN_ITEM_CHANGE, payload: { train } };
}
