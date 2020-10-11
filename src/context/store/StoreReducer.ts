import { Action } from "../../types/stateManagement";
import {
  ADD_BOARD,
  ADD_STASK,
  REMOVE_STASK,
  RELOCATED_STASK,
} from "./StoreConstants";
import { INITIAL_STATE, StoreState } from "./StoreContext";

function move(arr: any[], from: number, to: number) {
  const elm = arr.splice(from, 1)[0];
  arr.splice(to, 0, elm);
  return arr;
}

export function storeReducer(
  state = INITIAL_STATE,
  action: Action
): StoreState {
  // console.log({ action });
  switch (action.type) {
    case ADD_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload],
      };

    case RELOCATED_STASK:
      return {
        ...state,
        boards: [
          ...state.boards.map((board) => {
            if (board.id === action.payload.boardId) {
              const { from, to } = action.payload;
              const newTasks = move([...board.tasks], from, to);

              return { ...board, tasks: newTasks };
            }

            return board;
          }),
        ],
      };

    case ADD_STASK:
      return {
        ...state,
        boards: [
          ...state.boards.map((board) => {
            if (board.id === action.payload.boardId) {
              const { to, task } = action.payload;
              const newTasks = [...board.tasks];
              newTasks.splice(to, 0, task);

              return { ...board, tasks: newTasks };
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
