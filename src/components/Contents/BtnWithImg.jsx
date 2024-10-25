import React from "react";
import styled from "styled-components";
import { media } from "/src/mediaquery.js";

const StyledBtnWithImg = styled.a`
  align-items: center;
  box-shadow: 2px 2px 6px #aaa;
  display: flex;
  font-weight: 700;
  justify-content: center;
  left: 0;
  padding: 20px 0;
  position: relative;
  top: 0;
  transition: 0.3s;
  width: 100%;
  background-color: ${(props) => props.$bgColor || "#dcdcdc"};
  color: ${(props) => props.$color || "#333333"};

  &:hover {
    opacity: 0.8;
    top: 3px;
    left: 3px;
  }

  > img {
    width: 20px;
    margin-right: 10px;
  }
`;

const BtnWithImg = ({ label, href, img, bgColor, color }) => {
  return (
    <StyledBtnWithImg href={href} $bgColor={bgColor} $color={color}>
      <img src={img} target="_blank" />
      {label}
    </StyledBtnWithImg>
  );
};

export default BtnWithImg;
