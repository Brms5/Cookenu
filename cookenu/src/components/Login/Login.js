import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LoginFormContainer } from "./styled";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useForm from "../../hooks/userForm";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={onSubmitForm}
      >
        <form>
          <LoginFormContainer>
            <TextField
              name={"email"}
              value={form.email}
              onChange={onChange}
              label="E-mail"
              variant="standard"
              size="medium"
              fullWidth
              margin={"normal"}
              type="email"
              required
              error={form === "E-mail incorreto!"}
            />
            <TextField
              name={"password"}
              value={form.password}
              onChange={onChange}
              label="Password"
              type="password"
              variant="standard"
              size="medium"
              fullWidth
              margin={"normal"}
              required
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
              type="submit"
            >
              Login!!!
            </Button>
          </Stack>
        </form>
      </Box>
      <Button
        sx={{ color: "black", backgroundColor: "#7FFF00" }}
        variant="contained"
        size="large"
        fullWidth
        onClick={() => navigate("/signup")}
      >
        NÃO TEM CONTA?
      </Button>
    </div>
  );
}
