import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { media } from "/src/mediaquery.js";
import Logo from "/src/components/Header/Logo.jsx";
import Nav from "/src/components/Header/Nav.jsx";
import DrawerBtn from "/src/components/Header/DrawerBtn.jsx";
import DrawerMenu from "/src/components/Header/DrawerMenu.jsx";

const StyledHeader = styled.header`
  background-color: #ffffff;
  box-shadow: 0 3px 5px hsla(0, 0%, 43%, 0.251);
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;

  ${media.lg`
    padding: 20px 0;
  `}

  >.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Header = ({ setHeaderHeight }) => {
  const headerRef = useRef();

  const updateHeaderHeight = () => {
    if (headerRef.current) {
      const height = headerRef.current.clientHeight;
      setHeaderHeight(height);
      document.documentElement.style.setProperty(
        "--headerHeight",
        `${height}px`
      );
    }
  };

  useEffect(() => {
    updateHeaderHeight();

    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader ref={headerRef}>
      <div className="container">
        <Logo />
        <Nav />
        <DrawerBtn onClick={toggleDrawer} isOpen={isOpen} />
      </div>
      {isOpen ? <DrawerMenu isOpen={isOpen} /> : null}
    </StyledHeader>
  );
};

export default Header;
