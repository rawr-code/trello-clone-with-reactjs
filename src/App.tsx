import React from "react";
import { createGlobalStyle } from "styled-components";
import MainContainer from "./components/Atoms/MainContainer";

import Header from "./components/Molecules/Header";
import Scrum from "./components/Organisms/Scrum";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    background-color: #282c34;
    color: #ffffff;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0
  }

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: hsla(0, 0%, 0%, 0.2);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const App: React.FC = () => {
  return (
    <MainContainer>
      <GlobalStyle />
      <Header />
      <Scrum />
    </MainContainer>
  );
};

export default App;
