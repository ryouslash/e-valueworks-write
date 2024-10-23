import React from "react";
import styled from "styled-components";
import { media } from "/src/mediaquery.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import chatwork from "/src/assets/img/cw_logomark_color.svg";

const StyledMv = styled.section`
  align-items: center;
  display: flex;
  min-height: calc(400px + 5vw);
  padding: 30px 0;
  position: relative;
`;

const StyledBtns = styled.section``;

const Mv = () => {
  return (
    <StyledMv>
      <div class="container">
        <h1 class="js-typing">
          現役Webエンジニアによる
          <br />
          IT・Web特化ライティングサービス
        </h1>
        <div>
          <a href="#">
            <FontAwesomeIcon icon={faEnvelope} className="fa-envelope" />
            お見積り・ご相談
          </a>
          <a href="https://www.chatwork.com/ryouslash" target="_blank">
            <img src={chatwork} />
            Chatworkでご相談
          </a>
        </div>
      </div>
    </StyledMv>
  );
};

export default Mv;
