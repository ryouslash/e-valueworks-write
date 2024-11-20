import styled, { keyframes } from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";

const LoadingScreen = () => {
  return (
    <StyledLoadingScreen>
      <LoadingIcon viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r="20"
          strokeDasharray="95.6"
          strokeDashoffset="0"
        />
      </LoadingIcon>
      <p>Loading...</p>
    </StyledLoadingScreen>
  );
};

// 回転アニメーションを定義
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// ローディング画面のスタイル
const StyledLoadingScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
  text-align: center;
`;

// SVGアイコンのスタイル
const LoadingIcon = styled.svg`
  width: 50px;
  height: 50px;
  animation: ${rotate} 1s linear infinite;
  fill: none;
  stroke: #3498db;
  stroke-width: 4;
  stroke-linecap: round;
  margin-bottom: 10px;
`;

export default LoadingScreen;
