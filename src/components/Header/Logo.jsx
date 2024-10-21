import React from "react";
import styled from "styled-components";
import { media } from "/src/mediaquery.js";
import logo from "/src/assets/img/logo.svg";

const Logo = () => {
  return (
    <h1 className="logo">
      <a href="/">
        <img src={logo} />
      </a>
    </h1>
  );
};

export default Logo;
