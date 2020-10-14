import React from "react";
import styled from "styled-components";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContainerComponent: React.FC = ({ children }) => {
  return <Main>{children}</Main>;
};

export default MainContainerComponent;
