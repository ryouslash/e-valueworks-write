import React from "react";
import styled from "styled-components";
import { media } from "/src/mediaquery.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const StyledDrawerBtn = styled.div`
  display: none;

  ${media.lg`
    display: block;
  `}

  .fa-xmark {
    display: none;
  }
`;

const DrawerBtn = () => {
  return (
    <StyledDrawerBtn className="drawerBtn">
      <FontAwesomeIcon icon={faBars} />
      <FontAwesomeIcon icon={faXmark} />
    </StyledDrawerBtn>
  );
};

export default DrawerBtn;
