import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";

const Content = styled.div`
  margin-top: 80.5px;

  ${media.lg`
    margin-top: 72.19px;
  `}

  ${media.sm`
    margin-top: 70px;
  `}
`;

export default Content;
