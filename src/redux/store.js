import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import subscriptionReducer from "./subscription/reducer.js";
import searchReducer from "./search/reducer.js";
import filterReducer from "./filter/reducer.js";
import progressReducer from "./progress/reducer.js";
import trainReducer from "./train/reducer.js";
import coachReducer from "./coach/reducer.js";
import passengersReducer from "./passengers/reducer.js";
import payReducer from "./pay/reducer.js";

const reducer = combineReducers({
  subscription: subscriptionReducer,
  search: searchReducer,
  filter: filterReducer,
  progress: progressReducer,
  train: trainReducer,
  coach: coachReducer,
  passengers: passengersReducer,
  pay: payReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
