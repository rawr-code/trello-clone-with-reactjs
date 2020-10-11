export interface Task {
  id: string;
  title: string;
  description: string;
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
