import React from "react";
import Signup from "../../components/Signup/Signup";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import {
  SignupGlobalContainer,
  SignupInviteContainer,
  SignupFormContainer,
  H1Style,
} from "./styled";

function SignUpPage() {
  useUnprotectedPage();

  return (
    <SignupGlobalContainer>
      <SignupInviteContainer>INVITE</SignupInviteContainer>
      <SignupFormContainer>
        <H1Style>Cookenu</H1Style>
        <Signup />
      </SignupFormContainer>
    </SignupGlobalContainer>
  );
}

export default SignUpPage;
