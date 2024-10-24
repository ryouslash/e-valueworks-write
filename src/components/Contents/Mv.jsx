import React from "react";
import styled from "styled-components";
import { media } from "/src/mediaquery.js";
import chatwork from "/src/assets/img/cw_logomark_color.svg";
import { faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import BtnWithIcon from "/src/components/Contents/BtnWithIcon";
import BtnWithImg from "/src/components/Contents/BtnWithImg";
import ListWithIcon from "/src/components/Contents/ListWithIcon";
import TypingText from "/src/components/Contents/TypingText";

const StyledMv = styled.section`
  align-items: center;
  display: flex;
  min-height: calc(400px + 5vw);
  padding: 30px 0;
  position: relative;
  background-color: #eeeeee;
  background-size: cover;
  background-position: center;

  .container {
    > p {
      margin-bottom: 15px;
    }
  }

  .title {
    font-size: clamp(2rem, 1.8rem + 0.9375vw, 3.2rem);
    font-weight: 700;
    margin-bottom: 0.8em;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  max-width: 500px;
  width: 100%;

  ${media.md`
    max-width: initial;
  `}

  ${media.sm`
    flex-direction: column;
  `}

  > a {
    flex: 1;
  }
`;

const Mv = () => {
  return (
    <StyledMv>
      <div className="container">
        <TypingText />
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
    </StyledMv>
  );
};

export default Mv;
