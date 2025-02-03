import moment from "moment";
import {
  subscriptionRequest,
  subscriptionFailure,
  subscriptionSuccess,
} from "../subscription/actions.js";
import {
  trainListRequest,
  trainListFailure,
  trainListSuccess,
} from "../train/actions.js";
import {
  coachListRequest,
  coachListFailure,
  coachListSuccess,
} from "../coach/actions.js";

// Подписка на новости
export const subscriptionFetch = (email) => async (dispatch) => {
  dispatch(subscriptionRequest());
  try {
    const response = await fetch(
      `https://fe-diplom.herokuapp.com/subscribe?email=${email}`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    if (data) {
      dispatch(subscriptionSuccess());
    }
  } catch (e) {
    dispatch(subscriptionFailure(e.message));
  }
};

//Загрузка списка поездов
export const trainListFetch = (filter) => async (dispatch) => {
  dispatch(trainListRequest());
  try {
    let a = `from_city_id=${filter.fromСityId}`,
      b = `&to_city_id=${filter.toCityId}`,
      c = `${
        filter.dateStart
          ? `&date_start=${moment(filter.dateStart).format("YYYY-MM-DD")}`
          : ""
      }`,
      d = `${
        filter.dateEnd
          ? `&date_end=${moment(filter.dateEnd).format("YYYY-MM-DD")}`
          : ""
      }`,
      e = `&start_departure_hour_from=${filter.startDeparture.from}`,
      f = `&start_departure_hour_to=${filter.startDeparture.to}`,
      g = `&start_arrival_hour_from=${filter.startArrival.from}`,
      h = `&start_arrival_hour_to=${filter.startArrival.to}`,
      i = `&end_departure_hour_from=${filter.endDeparture.from}`,
      j = `&end_departure_hour_to=${filter.endDeparture.to}`,
      k = `&end_arrival_hour_from=${filter.endArrival.from}`,
      l = `&end_arrival_hour_to=${filter.endArrival.to}`,
      m = `&price_from=${filter.price.from}`,
      n = `&price_to=${filter.price.to}`,
      o = `${filter.lux ? `&have_first_class=${filter.lux}` : ""}`,
      p = `${filter.kupe ? `&have_second_class=${filter.kupe}` : ""}`,
      q = `${filter.platzcart ? `&have_third_class=${filter.platzcart}` : ""}`,
      r = `${filter.seat ? `&have_fourth_class=${filter.seat}` : ""}`,
      s = `${filter.wifi ? `&have_wifi=${filter.wifi}` : ""}`,
      t = `${filter.express ? `&have_express=${filter.express}` : ""}`,
      u = `&limit=${filter.limit}`,
      v = `&sort=${filter.sort}`,
      w = `${filter.offset ? `&offset=${filter.offset}` : ""}`;

    const response = await fetch(
      `https://fe-diplom.herokuapp.com/routes?${a}${b}${c}${d}${e}${f}${g}${h}${i}${j}${k}${l}${m}${n}${o}${p}${q}${r}${s}${t}${u}${v}${w}`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();

    if (data.items) {
      dispatch(trainListSuccess(data.total_count, data.items));
    }
  } catch (e) {
    dispatch(trainListFailure(e.message));
  }
};

// Загрузка списка вагонов
export const coachListFetch = (id) => async (dispatch) => {
  dispatch(coachListRequest());
  try {
    const response = await fetch(
      `https://fe-diplom.herokuapp.com/routes/${id}/seats`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();

    if (data) {
      dispatch(coachListSuccess(data));
    }
  } catch (e) {
    dispatch(coachListFailure(e.message));
  }
};
