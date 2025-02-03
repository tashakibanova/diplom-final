import {
  PASSENGERS_COUNT_CHANGE,
  PASSENGERS_PRICE_CHANGE,
  ADD_PASSENGERS_DATA,
} from "./types.js";

export function passengersCountChange(type, count) {
  return { type: PASSENGERS_COUNT_CHANGE, payload: { type, count } };
}

export function passengersPriceChange(type, price) {
  return { type: PASSENGERS_PRICE_CHANGE, payload: { type, price } };
}

export function addPassengersData(index, data) {
  return { type: ADD_PASSENGERS_DATA, payload: { index, data } };
}
