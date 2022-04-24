import axios from "axios";
import { BASE_URL } from "../../constants/urls";
export const signup = (body, clear, goToLogin) => {
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
      alert(res.data.message);
      clear();
      goToLogin();
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export const login = (body, clear, goToFeed, setLoginLogoutButton) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Login efetuado com sucesso!");
      clear();
      goToFeed();
      setLoginLogoutButton("Logout");
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
