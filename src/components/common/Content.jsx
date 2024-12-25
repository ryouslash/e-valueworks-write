import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";

const Content = styled.div`
  margin-top: 8.05rem;

  ${media.lg`
    margin-top: 7.219rem;
  `}

  ${media.sm`
    margin-top: 7rem;
  `}
`;

export default Content;
