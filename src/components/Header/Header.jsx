import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import Logo from "/src/components/header/Logo.jsx";
import Nav from "/src/components/header/Nav.jsx";
import DrawerBtn from "/src/components/header/DrawerBtn.jsx";
import DrawerMenu from "/src/components/header/DrawerMenu.jsx";
import Container from "/src/components/common/Container.jsx";

const Header = ({ setHeaderHeight }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader>
      <Container className="container">
        <Logo />
        <Nav />
        <DrawerBtn onClick={toggleDrawer} isOpen={isOpen} />
      </Container>
      {isOpen ? <DrawerMenu isOpen={isOpen} /> : null}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #ffffff;
  box-shadow: 0 0.3rem 0.5rem hsla(0, 0%, 43%, 0.251);
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;

  ${media.lg`
    padding: 2rem 0;
  `}

  >.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Header;
