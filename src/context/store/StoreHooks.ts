import { useContext } from "react";
import { addBoard, moveTask } from "./StoreActions";
import { StoreContext, StoreCtx } from "./StoreContext";

export const useAddBoard = () => {
  const { dispatch } = useContext<StoreCtx>(StoreContext);

  return () => dispatch(addBoard());
};

export interface Task {
  title: string;
}

interface TaskInfo {
  position: number;
  container: string;
  data: Task;
}

export const useMoveTask = () => {
  const { dispatch } = useContext<StoreCtx>(StoreContext);

  return (props: TaskInfo) => dispatch(moveTask(props));
};
