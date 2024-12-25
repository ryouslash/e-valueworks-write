import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 126rem;
  padding-left: 3rem;
  padding-right: 3rem;
  box-sizing: border-box;

  ${media.sm`
    padding-left: 2rem;
    padding-right: 2rem;
  `}
`;

export default Container;
