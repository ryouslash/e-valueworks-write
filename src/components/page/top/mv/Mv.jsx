// Mv.jsx
import { useState } from "react";
import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import mvImg from "/src/assets/img/mv_img.png";
import TypingTextH1 from "/src/components/common/TypingTextH1.jsx";
import Container from "/src/components/common/Container.jsx";
import FadeIn from "/src/components/common/FadeIn.jsx";
import MvBtns from "/src/components/page/top/mv/MvBtns.jsx";
import MvLists from "/src/components/page/top/mv/MvLists.jsx";
import MvNews from "/src/components/page/top/mv/MvNews.jsx";

const Mv = () => {
  const [isTypingFinished, setIsTypingFinished] = useState(false); // タイピングテキストの実行が終わったタイミングでファーストビューのアニメーションを実行

  return (
    <StyledMv>
      <Container className="container">
        <div className="left">
          <TypingTextH1
            text="現役Webエンジニアによる¥IT・Web特化ライティングサービス"
            isTypingFinished={isTypingFinished}
            onTypingComplete={() => setIsTypingFinished(true)}
          />
          <FadeIn isTypingFinished={isTypingFinished}>
            <MvLists />
          </FadeIn>
          <FadeIn isTypingFinished={isTypingFinished} delay="0.5s">
            <MvBtns />
          </FadeIn>
        </div>
        <div className="right">
          <img src={mvImg} alt="" />
        </div>
      </Container>
      <MvNews isTypingFinished={isTypingFinished} />
    </StyledMv>
  );
};

const StyledMv = styled.section`
  background-size: 500px;
  background: rgb(232, 238, 254);
  background: linear-gradient(
    115deg,
    rgba(232, 238, 254, 1) #e8eefe,
    rgba(216, 226, 255, 1) 44%,
    rgba(239, 243, 254, 1) 96%
  );

  > .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    min-height: calc(400px + 5vw);
    padding-top: 30px;
    padding-bottom: 30px;
    gap: 30px;

    ${media.md`
      flex-direction: column-reverse;
    `}

    > .left {
      max-width: 600px;
      flex-shrink: 1;

      ${media.md`
        max-width: initial;
      `}

      p {
        padding-left: 1.2em;
        margin-bottom: 15px;
      }
    }

    > .right {
      max-width: 500px;
      flex-shrink: 4;

      ${media.md`
        max-width: 300px;
      `}
    }
  }
`;

export default Mv;
