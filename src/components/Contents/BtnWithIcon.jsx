import React from "react";
import styled from "styled-components";
import { media } from "/src/mediaquery.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledBtnWithIcon = styled.a`
  align-items: center;
  box-shadow: 2px 2px 6px #aaa;
  display: flex;
  font-weight: 700;
  justify-content: center;
  left: 0;
  padding: 20px 0;
  position: relative;
  top: 0;
  transition: opacity 0.3s;
  width: 100%;
  background-color: ${(props) => props.$bgColor || "#dcdcdc"};
  color: ${(props) => props.$color || "#333333"};

  &:hover {
    opacity: 0.8;
  }

  > svg {
    font-size: 2rem;
    margin-right: 10px;
  }
`;

const BtnWithIcon = ({ label, href, icon, className, bgColor, color }) => {
  return (
    <StyledBtnWithIcon href={href} $bgColor={bgColor} $color={color}>
      <FontAwesomeIcon icon={icon} className={className} />
      {label}
    </StyledBtnWithIcon>
  );
};

export default BtnWithIcon;
