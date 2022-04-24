import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import { LoginFormContainer } from "./styled";
import Button from "@mui/material/Button";
import useForm from "../../hooks/userForm";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/Requests/users"
import { GlobalContext } from "../../contexts/GlobalContext";

export default function Login() {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const { setLoginLogoutButton } = useContext(GlobalContext);
  
  const body = form;

  const navigate = useNavigate();
  const goToFeed = () => {
    navigate("/");
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(body, clear, goToFeed, setLoginLogoutButton);
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
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
      </form>
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
