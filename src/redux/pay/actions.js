import { ADD_PAYER_DATA } from "./types.js";

export function addPayerData(payer) {
  return { type: ADD_PAYER_DATA, payload: { payer } };
}
