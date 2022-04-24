import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from "./styled";
import { useNavigate } from "react-router-dom";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { GlobalContext } from "../../contexts/GlobalContext"

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { loginLogoutButton, setLoginLogoutButton } = useContext(GlobalContext);

  const logout = () => {
    localStorage.removeItem("token");
  };

  const loginLogoutButtonAction = () => {
    if (token) {
      logout();
      navigate("/login");
      setLoginLogoutButton("Login");
    } else {
      navigate("/login");
    }
  };

  return (
    <AppBar position="static" font>
      <StyledToolbar>
        <Button
          onClick={() => navigate("/")}
          color="inherit"
          size="large"
          variant="outlined"
        >
          COOKENU
        </Button>
        <RestaurantMenuIcon fontSize="large" />
        <Button
          onClick={() => loginLogoutButtonAction()}
          color="inherit"
          size="large"
          variant="outlined"
        >
          {loginLogoutButton}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;
