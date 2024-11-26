// 共通スタイルを定義し、エクスポート
import styled, { css } from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";

const twoColumn = css`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 60px 0;

  ${media.md`
    flex-direction:column;
  `}

  > main {
    flex: 1;
  }

  > aside {
    max-width: 300px;

    ${media.md`
      max-width: initial;
  `}
  }
`;

const TwoColumn = styled.div`
  ${twoColumn}
`;

export default TwoColumn;
