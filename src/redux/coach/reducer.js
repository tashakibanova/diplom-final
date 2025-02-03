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

const initialState = {
  coachList: [],
  coachClass: null,
  coachItems: [],
  seats: {},
  seatsCount: 0,
  services: {},
  loading: false,
  error: null,
};

export default function coachReducer(state = initialState, action) {
  switch (action.type) {
    case COACH_LIST_REQUEST:
      return { ...state, loading: true, error: null };
    case COACH_LIST_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error };
    case COACH_LIST_SUCCESS:
      const { coachList } = action.payload;
      return { ...state, coachList, loading: false, error: null };
    case COACH_LIST_CLEAR:
      return initialState;
    case COACH_CLASS_CHANGE:
      const { coachClass } = action.payload;
      return { ...state, coachClass };
    case COACH_ITEMS_SELECT: {
      const { id } = action.payload;
      return {
        ...state,
        coachItems: [...state.coachItems, id],
        services: { ...state.services, [id]: [] },
        seats: { ...state.seats, [id]: [] },
      };
    }
    case COACH_ITEMS_UNSELECT: {
      const { id } = action.payload;
      return {
        ...state,
        coachItems: state.coachItems.filter((el) => el !== id),
        services: { ...state.services, [id]: [] },
        seats: { ...state.seats, [id]: [] },
      };
    }
    case COACH_ITEMS_CLEAR:
      return {
        ...state,
        coachItems: [],
        services: {},
        seats: {},
        seatsCount: 0,
      };
    case SEATS_ITEM_SELECT: {
      const { coach, number } = action.payload;
      return {
        ...state,
        seats: { ...state.seats, [coach]: [...state.seats[coach], number] },
        seatsCount: state.seatsCount + 1,
      };
    }
    case SEATS_ITEM_UNSELECT: {
      const { coach, number } = action.payload;
      return {
        ...state,
        seats: {
          ...state.seats,
          [coach]: state.seats[coach].filter((el) => el !== number),
        },
        seatsCount: state.seatsCount - 1,
      };
    }

    case SERVICE_ITEM_SELECT: {
      const { coach, service } = action.payload;
      return {
        ...state,
        services: {
          ...state.services,
          [coach]: [...state.services[coach], service],
        },
      };
    }
    case SERVICE_ITEM_UNSELECT: {
      const { coach, service } = action.payload;
      return {
        ...state,
        services: {
          ...state.services,
          [coach]: state.services[coach].filter((el) => el !== service),
        },
      };
    }
    default:
      return state;
  }
}
