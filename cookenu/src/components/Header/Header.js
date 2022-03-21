import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar } from "./styled"
import { useNavigate } from "react-router-dom";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

function Header() {
  const navigate = useNavigate();
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
        <RestaurantMenuIcon fontSize="large"/>
        <Button
          onClick={() => navigate("/login")}
          color="inherit"
          size="large"
          variant="outlined"
        >
          Login
        </Button>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;
