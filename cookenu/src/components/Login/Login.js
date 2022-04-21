import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LoginFormContainer } from "./styled";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Login() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <LoginFormContainer>
        <TextField
          id="standard-error"
          label="User"
          variant="standard"
          size="medium"
          fullWidth
        />
        <TextField
          id="password-input"
          label="Password"
          type="password"
          variant="standard"
          size="medium"
          fullWidth
        />
      </LoginFormContainer>
      <Stack direction="column">
        <Button
          sx={{
            color: "black",
            backgroundColor: "#ff7b55",
            marginBottom: "5px",
          }}
          variant="contained"
          size="large"
          fullWidth
        >
          Login!!!
        </Button>
        <Button
          sx={{ color: "black", backgroundColor: "#7FFF00" }}
          variant="contained"
          size="large"
          fullWidth
        >
          NÃO TEM CONTA?
        </Button>
      </Stack>
    </Box>
  );
}
