import React from "react";
import styled from "styled-components";
import { media } from "/src/mediaquery.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledListWithIcon = styled.li`
  padding-left: 1.2em;
  position: relative;

  > svg {
    left: 0;
    position: absolute;
    top: 8%;
    color: ${(props) => props.$color || "#333333"};
  }
`;

const ListWithIcon = ({ text, icon, className, color }) => {
  return (
    <StyledListWithIcon $color={color}>
      <FontAwesomeIcon icon={icon} className={className} />
      {text}
    </StyledListWithIcon>
  );
};

export default ListWithIcon;
