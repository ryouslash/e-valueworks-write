// 共通スタイルを定義し、エクスポート
import styled, { css } from "styled-components";

const sidebarItem = css`
  background-color: #eee;
  padding: 20px;

  h2 {
    font-size: clamp(1.8rem, 1.6rem + 0.625vw, 2rem);
    font-weight: 500;
    margin-bottom: 20px;
    text-align: center;

    &::before {
      border-right: 1px solid #aaa;
      border-top: 1px solid #aaa;
      content: "";
      display: block;
      height: 10px;
      margin-left: auto;
      width: 30px;
    }

    &::after {
      border-bottom: 1px solid #aaa;
      border-left: 1px solid #aaa;
      content: "";
      display: block;
      height: 10px;
      width: 30px;
    }
  }
`;

const StyledSibeItem = styled.div`
  ${sidebarItem}
`;

export { StyledSibeItem };
