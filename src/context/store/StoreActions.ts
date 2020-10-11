import {
  ADD_BOARD,
  ADD_STASK,
  RELOCATED_STASK,
  REMOVE_STASK,
} from "./StoreConstants";
import { Board, MoveTaskBoard } from "./StoreTypes";

export const addBoard = (board: Board) => {
  return {
    type: ADD_BOARD,
    payload: board,
  };
};

export const addTask = (payload: MoveTaskBoard) => {
  return {
    type: ADD_STASK,
    payload,
  };
};

export const removeTask = (payload: MoveTaskBoard) => {
  return {
    type: REMOVE_STASK,
    payload,
  };
};

export const relocatedTask = (payload: MoveTaskBoard) => {
  return {
    type: RELOCATED_STASK,
    payload,
  };
};

export type Actions =
  | ReturnType<typeof addBoard>
  | ReturnType<typeof addTask>
  | ReturnType<typeof removeTask>
  | ReturnType<typeof relocatedTask>;
