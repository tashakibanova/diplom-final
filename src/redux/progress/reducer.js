import { PROGRESS_STAGE_CHANGE } from "./types.js";

const initialState = {
  stage: 1,
};

export default function progressReducer(state = initialState, action) {
  switch (action.type) {
    case PROGRESS_STAGE_CHANGE:
      const { stage } = action.payload;
      return { ...state, stage };
    default:
      return state;
  }
}
