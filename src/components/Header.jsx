// src/components/Header.jsx
import React from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.svg";

const HeaderStyle = styled.header`
  background-color: #ffffff;
  padding: 20px 0;
  text-align: center;

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
    <HeaderStyle>
      <div className="container">
        <h1 className="logo">
          <a href="#">
            <img src={logo} />
          </a>
        </h1>
        <nav>
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
        </nav>
      </div>
    </HeaderStyle>
  );
};

export default Header;
