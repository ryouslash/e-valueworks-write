import styled from "styled-components";

import noImg from "/src/assets/img/noimg.jpg";
import FadeInOnScroll from "/src/components/common/FadeInOnScroll";

const FeatureList = () => {
  return (
    <StyledFeatureList>
      <FadeInOnScroll>
        <div className="left">
          <img src={noImg} alt="" />
        </div>
        <div className="right">
          <h3>現役Webエンジニアによる専門性の高い記事作成</h3>
          <p>
            最新の技術トレンドや実務経験に基づく知識を活かし、読者の信頼を得られる高品質な記事を作成します。専門性とわかりやすさを両立させたライティングで、貴社のサービス価値を最大化します。
          </p>
        </div>
      </FadeInOnScroll>
    </StyledFeatureList>
  );
};

const StyledFeatureList = styled.li`
  > div {
    display: flex;
    gap: 4rem;

    .left {
      width: 40%;
      flex-shrink: 0;
      position: relative;

      &::before {
        position: absolute;
        left: 0;
        top: 0;
        font-size: 3.6rem;
        font-style: italic;
        font-weight: 600;
        background-color: #ffffff;
        padding: 1rem;
        font-family: "Roboto", sans-serif;
      }
    }

    .right {
      flex: 1;

      h3 {
        font-size: 2.2rem;
        margin-bottom: 1rem;
      }

      p {
        line-height: 1.6;
      }
    }
  }
`;

export default FeatureList;
