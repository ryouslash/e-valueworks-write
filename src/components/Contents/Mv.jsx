import React from "react";
import styled from "styled-components";
import { media } from "/src/mediaquery.js";
import chatwork from "/src/assets/img/cw_logomark_color.svg";
import mvImg from "/src/assets/img/mv_img.png";
import { faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import BtnWithIcon from "/src/components/Contents/BtnWithIcon.jsx";
import BtnWithImg from "/src/components/Contents/BtnWithImg.jsx";
import ListWithIcon from "/src/components/Contents/ListWithIcon.jsx";
import TypingText from "/src/components/Contents/TypingText.jsx";

const StyledMv = styled.section`
  background-size: 500px;
  background: rgb(232, 238, 254);
  background: linear-gradient(
    115deg,
    rgba(232, 238, 254, 1) #E8EEFE%,
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

    .title {
      font-size: clamp(2rem, 1.8rem + 0.9375vw, 3.2rem);
      font-weight: 700;
      margin-bottom: 0.8em;

      ${media.md`
      text-align: center;
    `}
    }
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;

  ${media.md`
    max-width: initial;
  `}

  ${media.sm`
    flex-direction: column-reverse;
  `}

  > a {
    flex: 1;
  }
`;

const Mv = () => {
  return (
    <StyledMv>
      <div className="container">
        <div className="left">
          <TypingText text="現役Webエンジニアによる¥IT・Web特化ライティングサービス" />
          <ul>
            <ListWithIcon
              text="EEATを満たしたライターにお願いしたい方"
              icon={faCheck}
              className="fa-check"
              color="#73be60"
            />
            <ListWithIcon
              text="難解なIT用語を初心者向けに噛み砕いた解説記事を執筆して欲しい方など"
              icon={faCheck}
              className="fa-check"
              color="#73be60"
            />
          </ul>
          <p>様々なニーズにお答えします。</p>
          <BtnWrapper>
            <BtnWithIcon
              label="お見積り・ご相談"
              href="#"
              icon={faEnvelope}
              className="fa-envelope"
              bgColor="#18c1f0"
              color="#ffffff"
            />
            <BtnWithImg
              label="Chatworkでご相談"
              href="https://www.chatwork.com/ryouslash"
              img={chatwork}
            />
          </BtnWrapper>
        </div>
        <div class="right">
          <img src={mvImg} />
        </div>
      </div>
    </StyledMv>
  );
};

export default Mv;
