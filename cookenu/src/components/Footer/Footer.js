import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { StyledFooter, StyledIconsDiv, StyledH3 } from "./styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <AppBar position="static">
      <StyledFooter>
        <StyledIconsDiv>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </StyledIconsDiv>
        <StyledH3>© 2022 Cookenu</StyledH3>
      </StyledFooter>
    </AppBar>
  );
}

export default Footer;
