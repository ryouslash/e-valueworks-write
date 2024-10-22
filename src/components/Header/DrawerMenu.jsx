import React from "react";
import styled from "styled-components";
import { media } from "/src/mediaquery.js";
import DrawerItem from "/src/components/Header/DrawerItem.jsx";

const StyledDrawerMenu = styled.div`
  margin-top: 10px;

  ${media.lgUp`
    display: none !important;
  `}
`;

const DrawerMenu = () => {
  return (
    <StyledDrawerMenu>
      <div className="container">
        <ul>
          <DrawerItem href="/" label="ホーム" subLabel="HOME" />
          <DrawerItem href="#" label="アバウト" subLabel="ABOUT" />
          <DrawerItem href="#" label="料金" subLabel="PRICE" />
          <DrawerItem href="#" label="お知らせ" subLabel="NEWS" />
          <DrawerItem href="#" label="お問い合わせ" subLabel="CONTACT" />
        </ul>
      </div>
    </StyledDrawerMenu>
  );
};

export default DrawerMenu;
