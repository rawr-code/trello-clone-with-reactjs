import React from "react";
import styled from "styled-components";

const TaskWrapper = styled.div`
  padding: 8px;
  padding-top: 0;
`;

const TaskContent = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  display: block;

  max-width: 300px;
  min-height: 20px;
  position: relative;
  text-decoration: none;
  z-index: 0;

  box-shadow: 0 1px 3px 0 rgba(21, 27, 38, 0.15);
  transition: -webkit-box-shadow 0.25s;
  transition: box-shadow 0.25s;
  transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;

  &:hover {
    box-shadow: 0px 6px 20px 0 rgba(21, 27, 38, 0.2);
    & > :first-child {
      display: block;
    }
  }
`;

const TaskTitle = styled.span`
  font-size: 14px;
  color: rgb(42, 59, 71);

  clear: both;
  display: block;
  margin: 0 0 4px;
  overflow: hidden;
  text-decoration: none;
  word-wrap: break-word;
  color: #172b4d;
`;

const TaskRemoveButton = styled.button`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  font-size: 14px;
  font-weight: bold;
  color: #172b4d;
  margin: 8px;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;

  border-bottom-left-radius: 10px;
  padding-left: 1px;
  padding-bottom: 1px;
`;

interface Props {
  title: string;
  handleRemove: () => void;
}

const Task: React.FC<Props> = ({ title, handleRemove }) => {
  return (
    <TaskWrapper>
      <TaskContent>
        <TaskRemoveButton onClick={handleRemove}>X</TaskRemoveButton>
        <TaskTitle>{title}</TaskTitle>
      </TaskContent>
    </TaskWrapper>
  );
};

export default Task;
