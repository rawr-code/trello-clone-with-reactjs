import { ADD_BOARD, ADD_STASK, REMOVE_STASK } from "./StoreConstants";
import { INITIAL_STATE, StoreAction, StoreState } from "./StoreContext";

export function storeReducer(
  state = INITIAL_STATE,
  action: StoreAction
): StoreState {
  switch (action.type) {
    case ADD_BOARD:
      return {
        ...state,
        // containers: {
        //   ...state.containers,
        //   [action.payload.id]: action.payload,
        // },
        boards: [...state.boards, action.payload],
      };

    case ADD_STASK:
      return {
        ...state,
        boards: [
          ...state.boards.map((board) => {
            if (board.id === action.payload.boardId) {
              const { tasks } = board;
              // console.log({ action, reducerTasks: tasks });

              return board;
            }

            return board;
          }),
        ],
      };

    case REMOVE_STASK:
      return {
        ...state,
        boards: [
          ...state.boards.map((board) => {
            if (board.id === action.payload.boardId) {
              const tasks = board.tasks.filter(
                (task) => task.id !== action.payload.task.id
              );

              return { ...board, tasks };
            }

            return board;
          }),
        ],
      };

    default:
      return state;
  }
}
