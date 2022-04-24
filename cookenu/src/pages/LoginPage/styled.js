import styled from "styled-components";

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 80vh;
  justify-content: center;
  align-items: center;
`;

export const LoginImageContainer = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 999px) {
    display: none;
  };
`;

export const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

export const H1Style = styled.h1`
  font-size: 75px;

  @media screen and (max-height: 530px) {
    display: none;
  };
`;