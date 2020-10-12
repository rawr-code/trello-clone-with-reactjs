import {
  ADD_BOARD,
  ADD_STASK,
  RELOCATED_STASK,
  REMOVE_STASK,
} from "./StoreConstants";
import { Board, MoveTaskBoard, StoreActionTypes } from "./StoreTypes";

export const addBoard = (board: Board): StoreActionTypes => {
  return {
    type: ADD_BOARD,
    payload: board,
  };
};

export const addTask = (payload: MoveTaskBoard): StoreActionTypes => {
  return {
    type: ADD_STASK,
    payload,
  };
};

export const removeTask = (payload: MoveTaskBoard): StoreActionTypes => {
  return {
    type: REMOVE_STASK,
    payload,
  };
};

export const relocatedTask = (payload: MoveTaskBoard): StoreActionTypes => {
  return {
    type: RELOCATED_STASK,
    payload,
  };
};
