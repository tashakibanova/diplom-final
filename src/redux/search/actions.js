import {
  SEARCH_FIELD_CHANGE,
  SEARCH_FIELD_SWAP,
  SEARCH_FIELD_CLEAR,
} from "./types.js";

export function searchFieldChange(name, value) {
  return { type: SEARCH_FIELD_CHANGE, payload: { name, value } };
}

export function searchFieldSwap(routeStart, routeEnd) {
  return { type: SEARCH_FIELD_SWAP, payload: { routeStart, routeEnd } };
}

export function searchFieldClear() {
  return { type: SEARCH_FIELD_CLEAR };
}
