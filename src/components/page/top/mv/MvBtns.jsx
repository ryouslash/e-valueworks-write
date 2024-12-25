import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";

import { keyColor } from "/src/assets/js/variable.js";

import chatwork from "/src/assets/img/cw_logomark_color.svg";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import BtnWithIcon from "/src/components/common/BtnWithIcon";
import BtnWithImg from "/src/components/common/BtnWithImg";

const MvBtns = () => {
  return (
    <StyledMvBtns>
      <BtnWithIcon
        label="お見積り・ご相談"
        href="#"
        icon={faEnvelope}
        className="fa-envelope"
        bgColor={keyColor}
        color="#ffffff"
      />
      <BtnWithImg
        label="Chatworkでご相談"
        href="https://www.chatwork.com/ryouslash"
        img={chatwork}
        width={150}
        height={150}
      />
    </StyledMvBtns>
  );
};

const StyledMvBtns = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
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

export default MvBtns;
