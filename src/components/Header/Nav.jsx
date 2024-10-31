import React from "react";
import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import NavItem from "/src/components/Header/NavItem.jsx";

const StyledNavItems = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  ${media.lg`
    display: none;
  `}
`;

const Nav = () => {
  return (
    <nav>
      <StyledNavItems>
        <NavItem href="/" label="ホーム" subLabel="HOME" />
        <NavItem href="/about" label="アバウト" subLabel="ABOUT" />
        <NavItem href="#" label="料金" subLabel="PRICE" />
        <NavItem href="#" label="お知らせ" subLabel="NEWS" />
        <NavItem href="#" label="お問い合わせ" subLabel="CONTACT" />
      </StyledNavItems>
    </nav>
  );
};

export default Nav;
