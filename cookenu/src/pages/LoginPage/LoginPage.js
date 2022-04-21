import React from "react";
import {
  LoginPageContainer,
  LoginImageContainer,
  LoginInputContainer,
  H1Style,
} from "./styled";
import cartoonchef from "../../assets/cartoonchef.webp";
import Login from "../../components/Login/Login";

function LoginPage() {
  return (
    <LoginPageContainer>
      <LoginImageContainer>
        <img src={cartoonchef} alt="Chefe de cozinha em desenho" />
      </LoginImageContainer>
      <LoginInputContainer><H1Style>Cookenu</H1Style><Login /></LoginInputContainer>
    </LoginPageContainer>
  );
}

export default LoginPage;
