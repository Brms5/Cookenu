import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { StyledHomePage } from "./styled"

function HomePage() {
  useProtectedPage();

  return (
    <StyledHomePage>
      <h1>HomePage</h1>
    </StyledHomePage>
  );
}

export default HomePage;
