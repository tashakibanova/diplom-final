import {
  SUBSCRIPTION_FIELD_CHANGE,
  SUBSCRIPTION_REQUEST,
  SUBSCRIPTION_FAILURE,
  SUBSCRIPTION_SUCCESS,
} from "./types.js";

export function subscriptionFieldChange(email) {
  return { type: SUBSCRIPTION_FIELD_CHANGE, payload: { email } };
}

export function subscriptionRequest() {
  return { type: SUBSCRIPTION_REQUEST };
}

export function subscriptionFailure(error) {
  return { type: SUBSCRIPTION_FAILURE, payload: { error } };
}

export function subscriptionSuccess() {
  return { type: SUBSCRIPTION_SUCCESS };
}
