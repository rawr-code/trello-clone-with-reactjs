import React from "react";
import styled from "styled-components";
import { useStoreState } from "../../../context/store/StoreHooks";
import Board from "../../Molecules/Board";

const ScrumContainer = styled.div`
  user-select: none;

  white-space: nowrap;
  margin: 8px 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
  top: 60px;
  right: 0;
  bottom: 0;
  left: 0;

  & > :first-child {
    margin-left: 8px;
  }
  & > :last-child {
    margin-right: 8px;
  }
`;

const Scrum: React.FC = () => {
  const { boards } = useStoreState();

  return (
    <ScrumContainer>
      {boards.map((ctn) => (
        <Board key={ctn.id} {...ctn} />
      ))}
    </ScrumContainer>
  );
};

export default Scrum;
