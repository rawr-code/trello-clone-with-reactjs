import {
  changePositionIntoArray,
  pushItemIntoArray,
  removeItemFromArray,
} from "../../utils/orderData";
import { Persistor } from "../../utils/persistor";
import {
  ADD_BOARD,
  ADD_STASK,
  REMOVE_STASK,
  RELOCATED_STASK,
  ADD_STASK_ON_BOARD,
  REMOVE_STASK_ON_BOARD,
} from "./StoreConstants";
import { INITIAL_STATE, StoreState } from "./StoreContext";
import { StoreActionTypes } from "./StoreTypes";

export const storePersistor = Persistor<StoreState>("store_data");

export function storeReducer(
  state = INITIAL_STATE,
  action: StoreActionTypes
): StoreState {
  return storePersistor.set(
    (() => {
      switch (action.type) {
        case ADD_BOARD:
          return {
            ...state,
            boards: [...state.boards, action.payload],
          };

        case ADD_STASK_ON_BOARD:
          return {
            ...state,
            boards: [
              ...state.boards.map((board) => {
                if (board.id === action.payload.boardId) {
                  return { ...board, tasks: [...board.tasks, action.payload] };
                }

                return board;
              }),
            ],
          };

        case REMOVE_STASK_ON_BOARD:
          return {
            ...state,
            boards: [
              ...state.boards.map((board) => {
                if (board.id === action.payload.boardId) {
                  return {
                    ...board,
                    tasks: removeItemFromArray(
                      board.tasks,
                      "id",
                      action.payload.id
                    ),
                  };
                }

                return board;
              }),
            ],
          };

        case RELOCATED_STASK:
          return {
            ...state,
            boards: [
              ...state.boards.map((board) => {
                if (board.id === action.payload.boardId) {
                  const { from, to } = action.payload;
                  return {
                    ...board,
                    tasks: changePositionIntoArray(
                      board.tasks,
                      from || 0,
                      to || 0
                    ),
                  };
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
                  const newTask = { ...task, boardId: board.id };

                  return {
                    ...board,
                    tasks: pushItemIntoArray(board.tasks, to || 0, newTask),
                  };
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
                  return {
                    ...board,
                    tasks: removeItemFromArray(
                      board.tasks,
                      "id",
                      action.payload.task.id
                    ),
                  };
                }

                return board;
              }),
            ],
          };

        default:
          return state;
      }
    })()
  );
}
