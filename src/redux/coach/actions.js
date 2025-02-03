import {
  COACH_LIST_REQUEST,
  COACH_LIST_FAILURE,
  COACH_LIST_SUCCESS,
  COACH_LIST_CLEAR,
  COACH_CLASS_CHANGE,
  COACH_ITEMS_SELECT,
  COACH_ITEMS_UNSELECT,
  COACH_ITEMS_CLEAR,
  SEATS_ITEM_SELECT,
  SEATS_ITEM_UNSELECT,
  SERVICE_ITEM_SELECT,
  SERVICE_ITEM_UNSELECT,
} from "./types.js";

export function coachListRequest() {
  return { type: COACH_LIST_REQUEST };
}

export function coachListFailure(error) {
  return { type: COACH_LIST_FAILURE, payload: { error } };
}

export function coachListSuccess(coachList) {
  return { type: COACH_LIST_SUCCESS, payload: { coachList } };
}

export function coachListClear() {
  return { type: COACH_LIST_CLEAR };
}

export function coachClassChange(coachClass) {
  return { type: COACH_CLASS_CHANGE, payload: { coachClass } };
}

export function coachItemsSelect(id) {
  return { type: COACH_ITEMS_SELECT, payload: { id } };
}

export function coachItemsUnselect(id) {
  return { type: COACH_ITEMS_UNSELECT, payload: { id } };
}

export function coachItemsClear() {
  return { type: COACH_ITEMS_CLEAR };
}

export function seatsItemSelect(coach, number) {
  return { type: SEATS_ITEM_SELECT, payload: { coach, number } };
}

export function seatsItemUnselect(coach, number) {
  return { type: SEATS_ITEM_UNSELECT, payload: { coach, number } };
}

export function serviceItemSelect(coach, service) {
  return { type: SERVICE_ITEM_SELECT, payload: { coach, service } };
}

export function serviceItemUnselect(coach, service) {
  return { type: SERVICE_ITEM_UNSELECT, payload: { coach, service } };
}
