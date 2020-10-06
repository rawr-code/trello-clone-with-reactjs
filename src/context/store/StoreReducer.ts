import { GET_IMAGES } from "./StoreActions";
import { INITIAL_STATE, StoreAction, StoreState } from "./StoreContext";

export function storeReducer(
  state = INITIAL_STATE,
  action: StoreAction
): StoreState {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
      };

    default:
      return state;
  }
}
