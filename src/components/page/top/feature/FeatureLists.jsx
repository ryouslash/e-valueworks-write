import styled from "styled-components";

import noImg from "/src/assets/img/noimg.jpg";
import FadeInOnScroll from "/src/components/common/FadeInOnScroll";

const FeatureLists = () => {
  return (
    <ul>
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
      <StyledFeatureList>
        <FadeInOnScroll>
          <div className="left">
            <img src={noImg} alt="" />
          </div>
          <div className="right">
            <h3>独自記事構成テンプレを使った顧客ニーズの深掘り</h3>
            <p>
              顕在ニーズと潜在ニーズを的確に引き出す独自のテンプレートを使用し、ユーザーの共感を呼ぶコンテンツを作成。貴社の課題解決に直結する記事をお届けします。{" "}
            </p>
          </div>{" "}
        </FadeInOnScroll>
      </StyledFeatureList>
      <StyledFeatureList>
        <FadeInOnScroll>
          <div className="left">
            <img src={noImg} alt="" />
          </div>
          <div className="right">
            <h3>視覚的に訴求するインフォグラフィック制作</h3>
            <p>
              複雑な情報を直感的に理解できるように整理したインフォグラフィックを制作。ビジュアルで強い印象を残し、読者のエンゲージメントを向上させます。
            </p>
          </div>
        </FadeInOnScroll>
      </StyledFeatureList>
      <StyledFeatureList>
        <FadeInOnScroll>
          <div className="left">
            <img src={noImg} alt="" />
          </div>
          <div className="right">
            <h3>1次ソースのみにこだわった正確な情報収集</h3>
            <p>
              英語での情報収集が可能な現役エンジニアが、技術書や公式ドキュメントなどの1次ソースに基づいて正確な情報を収集します。
              <br />
              日本語訳や二次情報に頼らず、最新かつ信頼性の高いデータを基にした記事を提供。
              <br />
              技術的な裏付けが求められる場面で、読者の信頼を確保します。
            </p>
          </div>{" "}
        </FadeInOnScroll>
      </StyledFeatureList>
      <StyledFeatureList>
        <FadeInOnScroll>
          <div className="left">
            <img src={noImg} alt="" />
          </div>
          <div className="right">
            <h3>読者の次のアクションを想定した戦略的記事作成</h3>
            <p>
              自身が運営する複数のメディアで培った経験を活かし、記事ごとの目的（Know、Buy、Do、Go）に応じた構成を設計。
              <br />
              内部リンクや導線設計を通じて、読者を迷わず次の行動へ導きます。情報提供だけでなく、ビジネス目標達成を後押しする戦略的な記事をお届けします。
            </p>
          </div>
        </FadeInOnScroll>
      </StyledFeatureList>
    </ul>
  );
};

const StyledFeatureList = styled.li`
  &:first-of-type {
    > div {
      .left {
        &::before {
          content: "01";
        }
      }
    }
  }

  &:nth-of-type(2) {
    > div {
      .left {
        &::before {
          content: "02";
        }
      }
    }
  }

  &:nth-of-type(3) {
    > div {
      .left {
        &::before {
          content: "03";
        }
      }
    }
  }

  &:nth-of-type(4) {
    > div {
      .left {
        &::before {
          content: "04";
        }
      }
    }
  }

  &:nth-of-type(5) {
    > div {
      .left {
        &::before {
          content: "05";
        }
      }
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 4rem;
  }

  &:nth-of-type(even) {
    > div {
      flex-direction: row-reverse;
    }
  }

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

export default FeatureLists;
