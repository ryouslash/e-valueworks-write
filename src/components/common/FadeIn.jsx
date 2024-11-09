import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";

const FadeIn = ({ children, isTypingFinished, delay }) => {
  return (
    <StyledMvFadeInElement
      className={isTypingFinished ? "is-fadeIn" : ""}
      $delay={delay}
    >
      {children}
    </StyledMvFadeInElement>
  );
};

const StyledMvFadeInElement = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: 0.5s;
  transition-delay: ${(props) => props.$delay || "0s"};

  &.is-fadeIn {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default FadeIn;
