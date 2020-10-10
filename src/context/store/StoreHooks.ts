import { useContext } from "react";
import { addBoard, addTask, removeTask } from "./StoreActions";
import { StoreContext, StoreCtx, StoreState } from "./StoreContext";
import { Board, MoveTaskBoard } from "./StoreTypes";

export const useStoreState = (): StoreState => {
  const { state } = useContext<StoreCtx>(StoreContext);
  return state;
};

export const useAddBoard = () => {
  const { dispatch } = useContext<StoreCtx>(StoreContext);

  return (board: Board) => dispatch(addBoard(board));
};

export const useMoveTaskBoard = () => {
  const { dispatch } = useContext<StoreCtx>(StoreContext);

  const addToBoard = (payload: MoveTaskBoard) => {
    dispatch(addTask(payload));
  };

  const removeFromBoard = (payload: MoveTaskBoard) => {
    dispatch(removeTask(payload));
  };

  // const RelocatedOnBoard = () => {};

  return {
    addToBoard,
    removeFromBoard,
  };
};
