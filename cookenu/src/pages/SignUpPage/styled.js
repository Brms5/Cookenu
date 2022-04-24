import styled from "styled-components";

export const SignupGlobalContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 100vw;
`;

export const SignupInviteContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;
  justify-content: center;
  align-items: center;
  background-color: #faf0e6;

  @media screen and (max-width: 999px) {
    display: none;
  };
`;

export const SignupFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  justify-content: center;
  align-items: center;
`;

export const H1Style = styled.h1`
  font-size: 75px;

  @media screen and (max-height: 530px) {
    display: none;
  } ;
`;