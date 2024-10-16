// src/components/Header.jsx
import React from 'react';
import styled from "styled-components";
import logo from '../assets/img/logo.svg';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
`;

const NavLink = styled.a`
  margin-right: 10px;
  color: white;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1><img src={logo} /></h1>
      <nav>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
