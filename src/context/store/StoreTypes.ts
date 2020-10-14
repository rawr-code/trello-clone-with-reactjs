import {
  ADD_BOARD,
  ADD_STASK_ON_BOARD,
  REMOVE_STASK_ON_BOARD,
  ADD_STASK,
  RELOCATED_STASK,
  REMOVE_STASK,
} from "./StoreConstants";

export interface Task {
  id: string;
  title: string;
  boardId: string;
}

export interface Board {
  id: string;
  title: string;
  tasks: Task[];
}

export interface MoveTaskBoard {
  boardId: string;
  task: Task;
  from?: number | null;
  to?: number | null;
}

// Actions -----
interface addBoardAction {
  type: typeof ADD_BOARD;
  payload: Board;
}

interface addTaskOnBoardAction {
  type: typeof ADD_STASK_ON_BOARD;
  payload: Task;
}
interface removeTaskOnBoardAction {
  type: typeof REMOVE_STASK_ON_BOARD;
  payload: Task;
}

interface addTaskAction {
  type: typeof ADD_STASK;
  payload: MoveTaskBoard;
}

interface removeTaskAction {
  type: typeof REMOVE_STASK;
  payload: MoveTaskBoard;
}

interface relocatedTaskAction {
  type: typeof RELOCATED_STASK;
  payload: MoveTaskBoard;
}

export type StoreActionTypes =
  | addBoardAction
  | addTaskOnBoardAction
  | removeTaskOnBoardAction
  | addTaskAction
  | removeTaskAction
  | relocatedTaskAction;

// -----
