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

function move(arr: any[], from: any, to: any) {
  const elm = arr.splice(from, 1)[0];
  arr.splice(to, 0, elm);
  return arr;
}

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
                  const newTasks = [...board.tasks];
                  newTasks.push(action.payload);

                  return { ...board, tasks: newTasks };
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
                  const newTasks = [
                    ...board.tasks.filter(
                      (task) => task.id !== action.payload.id
                    ),
                  ];
                  console.log({ newTasks });
                  
                  return { ...board, tasks: newTasks };
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
                  newTasks.splice(to || 0, 0, task);

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
    })()
  );
}
