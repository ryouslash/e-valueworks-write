import React from "react";
import styled from "styled-components";
import { media } from "/src/mediaquery.js";
import logo from "/src/assets/img/logo.svg";

const StyledLogo = styled.h1`
  max-width: 250px;

  ${media.sm`
    max-width: 200px;
  `}
`;

const Logo = () => {
  return (
    <StyledLogo className="Logo">
      <a href="/">
        <img src={logo} />
      </a>
    </StyledLogo>
  );
};

export default Logo;
