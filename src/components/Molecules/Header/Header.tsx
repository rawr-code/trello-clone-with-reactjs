import React from "react";
import styled, { keyframes } from "styled-components";

import logo from "../../../assets/logo.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Header = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 2rem;

  box-sizing: border-box;

  display: flex;
  align-items: center;

  background-color: #20232a;

  & > img {
    width: 20px;
    height: 20px;

    animation: ${rotate} 2s linear infinite;
  }

  & > h1 {
    margin-left: 10px;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: #61dafb;
  }
`;

const HeaderComponent: React.FC = () => {
  return (
    <Header>
      <img src={logo} alt="logo" />
      <h1>Simple Scrum</h1>
    </Header>
  );
};

export default HeaderComponent;
