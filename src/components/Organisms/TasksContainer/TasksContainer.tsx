import React from "react";
import styled from "styled-components";

import Task from "../../Molecules/Task";

interface Props {
  containerName: string;
  title: string;
  containerId: string;
}

const TasksWrapper = styled.div`
  min-width: 300px;
  max-width: 300px;

  padding: 2rem;
`;

const ContainerTitle = styled.h2`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #fff;
  padding: 1rem;

  font-size: 18px;
  text-transform: uppercase;
  color: rgb(42, 59, 71);
`;

const TasksContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: #fff;
  color: #000;
  box-sizing: border-box;

  border-radius: 10px;

  overflow-y: auto;
`;

const Tasks = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  padding: 0 1rem;

  box-sizing: border-box;

  & > div::hover {
    will-change: transform, box-shadow;
  }
`;

const TasksContainerComponent: React.FC<Props> = ({
  containerName,
  containerId,
  title,
}) => {
  const data = [1, 2];

  return (
    <TasksWrapper>
      <TasksContainer id={containerName}>
        <ContainerTitle>{title}</ContainerTitle>
        <Tasks id={containerId}>
          {data.map((item) => (
            <Task key={item} title={item} />
          ))}
        </Tasks>
      </TasksContainer>
    </TasksWrapper>
  );
};

export default TasksContainerComponent;
