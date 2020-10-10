import { ADD_BOARD, ADD_STASK, REMOVE_STASK } from "./StoreConstants";
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
