import React from "react";
import Router from "./routes/Router";
import theme from "./constants/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { GlobalStyled } from "./constants/GlobalStyled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyled>  */}
        <Router />
      {/* </GlobalStyled> -> Estruturar adequadamente o GlobalStyled no projeto */} 
    </ThemeProvider>
  );
}

export default App;
