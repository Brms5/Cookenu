import * as React from "react";
import TextField from "@mui/material/TextField";
import { SignupFormContainer } from "./styled";
import Button from "@mui/material/Button";
import useForm from "../../hooks/userForm";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/Requests/users";

export default function Signup() {
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const body = form;

  const navigate = useNavigate();
  const goToLogin = () => { 
    navigate("/login");
   };

  const onSubmitForm = (event) => {
    event.preventDefault();
    signup(body, clear, goToLogin);
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <SignupFormContainer>
          <TextField
            name={"name"}
            value={form.name}
            onChange={onChange}
            label="Nome"
            type="text"
            variant="standard"
            size="medium"
            fullWidth
            margin={"normal"}
            required
          />
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
        </SignupFormContainer>
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
          FAZER CADASTRO!
        </Button>
      </form>
    </div>
  );
}
