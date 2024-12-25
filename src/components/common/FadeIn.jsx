import styled from "styled-components";

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
  transform: translateY(2rem);
  transition: opacity 0.5s, transform 0.5s;
  transition-delay: ${(props) => props.$delay || "0s"};

  &.is-fadeIn {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default FadeIn;
