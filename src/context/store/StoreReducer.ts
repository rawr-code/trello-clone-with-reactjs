import { ADD_BOARD, MOVE_STASK } from "./StoreActions";
import { INITIAL_STATE, StoreAction, StoreState } from "./StoreContext";

export function storeReducer(
  state = INITIAL_STATE,
  action: StoreAction
): StoreState {
  console.log({ state, action });
  switch (action.type) {
    case ADD_BOARD:
      return {
        ...state,
        containers: [...state.containers, action.payload],
      };

    case MOVE_STASK:
      return {
        ...state,
        containers: [...state.containers, action.payload],
      };

    default:
      return state;
  }
}
