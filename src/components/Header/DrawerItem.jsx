import React from "react";
import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";

const StyledDrawerItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #aaaaaa;
  font-size: 1.3rem;
  padding: 10px 0;

  &:not(:last-of-type) {
    border-bottom: 1px dotted #333333;
  }
`;

const DrawerItem = ({ href, label, subLabel }) => {
  return (
    <StyledDrawerItem>
      <a href={href}>{label}</a>
      <span>{subLabel}</span>
    </StyledDrawerItem>
  );
};

export default DrawerItem;
