export const ADD_BOARD = "scrum/ADD_BOARD";
export const MOVE_STASK = "scrum/MOVE_STASK";

export const addBoard = () => {
  return {
    type: ADD_BOARD,
    payload: {
      title: "test",
    },
  };
};

export interface Task {
  title: string;
}

interface TaskInfo {
  position: number;
  container: string;
  data: Task;
}

export const moveTask = (props: TaskInfo) => {
  const { container, position, data } = props;
  return {
    type: MOVE_STASK,
    payload: {
      container,
      position,
      data,
    },
  };
};
