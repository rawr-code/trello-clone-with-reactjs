import React from "react";
import styled from "styled-components";
import { Container, Draggable, DropResult } from "react-smooth-dnd";
import { v4 as uuidv4 } from "uuid";

import Task from "../Task";
import AddTaskForm from "../AddTaskForm";
import {
  useAddTask,
  useRemoveTask,
  useMoveTaskBoard,
} from "../../../context/store/StoreHooks";
import { Task as TaskProps } from "../../../context/store/StoreTypes";

const BoardWrapper = styled.div`
  width: 272px;
  margin: 0 4px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
`;

const BoardContent = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  white-space: normal;
`;

const BoardHeader = styled.header`
  flex: 0 0 auto;
  padding: 10px 8px;
  position: relative;
  min-height: 20px;

  /* is menu button */
  padding-right: 36px;
`;

const BoardHeaderTitle = styled.h2`
  display: none;
`;

const BoardHeaderTitleTextArea = styled.textarea`
  width: 100%;

  overflow: hidden;
  overflow-wrap: break-word;
  height: 28px;

  resize: none;

  background: transparent;
  border-radius: 3px;
  box-shadow: none;
  font-weight: 600;
  margin: -4px 0;
  min-height: 20px;
  padding: 4px 8px;
  resize: none;
  max-height: 256px;

  border: none;
  color: #172b4d;
  box-sizing: border-box;
  display: block;
  line-height: 20px;

  transition-property: background-color, border-color, box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
`;

const BoardList = styled.div``;

interface Props {
  id: string;
  title: string;
  tasks: TaskProps[];
}

const Board: React.FC<Props> = ({ id, title, tasks }) => {
  const { addToBoard, removeFromBoard, relocatedOnBoard } = useMoveTaskBoard();
  const addTaskOnBoard = useAddTask();
  const removeTaskOnBoard = useRemoveTask();

  const handleOnMoveTask = (boardId: string) => (e: DropResult) => {
    const {
      addedIndex: newPosition,
      removedIndex: oldPosition,
      payload: task,
    } = e;

    const wasAdded = newPosition !== null;
    const wasRemoved = oldPosition !== null;

    const wasRelocated = wasAdded && wasRemoved && newPosition !== oldPosition;

    if (wasRelocated) {
      relocatedOnBoard({
        boardId,
        task,
        from: oldPosition,
        to: newPosition,
      });
    } else if (wasAdded) {
      if (newPosition !== oldPosition) {
        addToBoard({
          boardId,
          task,
          to: newPosition,
        });
      }
    } else if (wasRemoved) {
      removeFromBoard({
        boardId,
        task,
      });
    }
  };

  const getPayload = (index: number) => {
    const payload = tasks[index];
    return payload;
  };

  const handleAddTask = (title: string) => {
    const taskData: TaskProps = {
      boardId: id,
      title,
      id: uuidv4(),
    };

    addTaskOnBoard(taskData);
  };
  const handleRemoveTask = (id: string) => () => {
    const taskData = tasks.find((task) => task.id === id);

    if (taskData?.id) {
      removeTaskOnBoard(taskData);
    }
  };

  return (
    <BoardWrapper>
      <BoardContent>
        <BoardHeader>
          <BoardHeaderTitle>{title}</BoardHeaderTitle>
          <BoardHeaderTitleTextArea value={title} readOnly />
        </BoardHeader>
        <BoardList>
          <Container
            groupName="col"
            onDrop={handleOnMoveTask(id)}
            getChildPayload={getPayload}
          >
            {tasks.map((task: any) => (
              <Draggable key={task.id}>
                <Task {...task} handleRemove={handleRemoveTask(task.id)} />
              </Draggable>
            ))}
          </Container>
          <AddTaskForm handleAddTask={handleAddTask} />
        </BoardList>
      </BoardContent>
    </BoardWrapper>
  );
};

export default Board;
