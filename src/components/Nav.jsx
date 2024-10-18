// src/components/Nav.jsx
import React from "react";
import styled from "styled-components";

const NavStyle = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #333;

    &:hover {
      color: #007bff;
    }
  }
`;

const Nav = () => {
  return (
    <NavStyle>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </NavStyle>
  );
};

export default Nav;
