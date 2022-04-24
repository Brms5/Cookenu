import React from 'react';
import { ErrorPageContainer } from "./styled";
import errorimage from "../../assets/errorimage.webp";

function ErrorPage() {
    return (
      <ErrorPageContainer>
        <img src={errorimage} alt="Imagem de erro" />
      </ErrorPageContainer>
    );
}

export default ErrorPage;