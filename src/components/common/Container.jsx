import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1260px;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;

  ${media.sm`
    padding-left: 20px;
    padding-right: 20px;
  `}
`;

export default Container;
