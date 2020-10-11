import { useContext } from "react";
import { addBoard, addTask, relocatedTask, removeTask } from "./StoreActions";
import { storeContext, StoreContext, StoreState } from "./StoreContext";
import { Board, MoveTaskBoard } from "./StoreTypes";

export const useStoreState = (): StoreState => {
  const { state } = useContext<StoreContext>(storeContext);
  return state;
};

export const useAddBoard = () => {
  const { dispatch } = useContext<StoreContext>(storeContext);

  return (board: Board) => dispatch(addBoard(board));
};

export const useMoveTaskBoard = () => {
  const { dispatch } = useContext<StoreContext>(storeContext);

  const addToBoard = (payload: MoveTaskBoard) => {
    dispatch(addTask(payload));
  };

  const removeFromBoard = (payload: MoveTaskBoard) => {
    dispatch(removeTask(payload));
  };

  const relocatedOnBoard = (payload: MoveTaskBoard) => {
    dispatch(relocatedTask(payload));
  };

  return {
    addToBoard,
    removeFromBoard,
    relocatedOnBoard,
  };
};
