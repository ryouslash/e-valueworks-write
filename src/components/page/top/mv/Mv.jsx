import { useState } from "react";
import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import mvImg from "/src/assets/img/mv_img.png";
import TypingTextH1 from "/src/components/common/TypingTextH1";
import Container from "/src/components/common/Container";
import FadeIn from "/src/components/common/FadeIn";
import MvBtns from "/src/components/page/top/mv/MvBtns";
import MvLists from "/src/components/page/top/mv/MvLists";

const Mv = () => {
  const [isTypingFinished, setIsTypingFinished] = useState(false); // タイピングテキストの実行が終わったタイミングでファーストビューのアニメーションを実行

  return (
    <StyledMv>
      <Container className="container">
        <div className="left">
          <TypingTextH1
            text="現役Webエンジニアによる¥IT分野特化のライティングサービス"
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
          <img src={mvImg} alt="" width={1200} height={1200} />
        </div>
      </Container>
    </StyledMv>
  );
};

const StyledMv = styled.section`
  background-size: 50rem;
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
    min-height: calc(40rem + 5vw);
    padding-top: 3rem;
    padding-bottom: 3rem;
    gap: 3rem;

    ${media.md`
      flex-direction: column-reverse;
    `}

    > .left {
      max-width: 60rem;
      flex-shrink: 1;

      ${media.md`
        max-width: initial;
      `}

      p {
        padding-left: 1.2em;
        margin-bottom: 1.5rem;
      }
    }

    > .right {
      max-width: 50rem;
      width: 100%;
      flex-shrink: 4;

      ${media.md`
        max-width: 30rem;
      `}
    }
  }
`;

export default Mv;
