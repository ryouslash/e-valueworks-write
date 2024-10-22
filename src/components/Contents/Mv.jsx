import React from "react";
import styled from "styled-components";
import { media } from "/src/mediaquery.js";

const StyledMv = styled.div`
  margin-top: ${(props) => props.headerHeight}px;
`;

const Mv = ({ headerHeight }) => {
  return (
    <StyledMv headerHeight={headerHeight}>
      <div>ここにテキスト</div>
    </StyledMv>
  );
};

export default Mv;
