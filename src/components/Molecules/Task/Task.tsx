import React from "react";
import styled from "styled-components";

interface Props {
  title: number;
}

const Task = styled.article`
  border: 1px solid #e5e5e5;
  background-color: #fff;
  max-width: 257px;
  border-radius: 4px;
  margin-bottom: 1rem;
  padding: 8px;

  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(21, 27, 38, 0.15);
  transition: -webkit-box-shadow 0.25s;
  transition: box-shadow 0.25s;
  transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;

  &:hover {
    box-shadow: 0px 6px 20px 0 rgba(21, 27, 38, 0.2);
  }
`;

const TaskTitle = styled.h3`
  font-size: 18px;
  color: rgb(42, 59, 71);
`;

const TaskDescription = styled.p`
  font-size: 14px;
  margin: 4px 0;
  color: rgb(87, 94, 102);
`;

const TaskDate = styled.p`
  font-size: 14px;
  color: rgb(87, 94, 102);
`;

const TaskComponent: React.FC<Props> = ({ title }) => {
  return (
    <Task>
      <TaskTitle>{title}</TaskTitle>
      <TaskDescription>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, est
        debitis
      </TaskDescription>
      <TaskDate>12/08/1997</TaskDate>
    </Task>
  );
};

export default TaskComponent;
