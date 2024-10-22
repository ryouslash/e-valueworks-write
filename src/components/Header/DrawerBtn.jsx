import React, { useState } from "react";
import styled from "styled-components";
import { media } from "/src/mediaquery.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const StyledDrawerBtn = styled.div`
  display: none;

  ${media.lg`
    display: block;
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
  `}

  >svg {
    font-size: clamp(1.8rem, 1.6rem + 0.625vw, 2rem);
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    transition: 0.3s;
  }

  > .fa-bars {
    z-index: 2;
  }

  > .fa-xmark {
    opacity: 0;
    z-index: 1;
  }

  &.is-open {
    > .fa-bars {
      opacity: 0;
      transform: translateX(-50%) translateY(-50%) rotate(2turn);
      z-index: 1;
    }

    > .fa-xmark {
      opacity: 1;
      transform: translateX(-50%) translateY(-50%) rotate(2turn);
      z-index: 2;
    }
  }
`;

const DrawerBtn = ({ onClick, isOpen }) => {
  return (
    <StyledDrawerBtn className={isOpen ? "is-open" : ""} onClick={onClick}>
      <FontAwesomeIcon icon={faBars} className="fa-bars" />
      <FontAwesomeIcon icon={faXmark} className="fa-xmark" />
    </StyledDrawerBtn>
  );
};

export default DrawerBtn;
