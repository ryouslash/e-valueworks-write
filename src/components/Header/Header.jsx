import React from "react";
import styled from "styled-components";
import { media } from "/src/mediaquery.js";
import Logo from "/src/components/Header/Logo";
import Nav from "/src/components/Header/Nav";
import DrawerBtn from "/src/components/Header/DrawerBtn";

const StyledHeader = styled.header`
  background-color: #ffffff;
  box-shadow: 0 3px 5px hsla(0, 0%, 43%, 0.251);
  left: 0;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 99;

  ${media.lg`
    padding: 20px 0;
  `}

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    max-width: 250px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <Logo />
        <Nav />
        <DrawerBtn />
      </div>
    </StyledHeader>
  );
};

export default Header;
