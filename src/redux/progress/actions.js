import { PROGRESS_STAGE_CHANGE } from "./types.js";

export function progressStageChange(stage) {
  return { type: PROGRESS_STAGE_CHANGE, payload: { stage } };
}
