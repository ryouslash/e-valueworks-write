import styled from "styled-components";

import useObserver from "/src/hooks/useObserver";

const FadeInOnScroll = ({ children, delay }) => {
  const { ref, isVisible } = useObserver();

  return (
    <StyledFadeInOnScroll
      ref={ref}
      className={isVisible ? "is-fadeIn" : ""}
      $delay={delay}
    >
      {children}
    </StyledFadeInOnScroll>
  );
};

const StyledFadeInOnScroll = styled.div`
  opacity: 0;
  transform: translateY(6rem);
  transition: transform 0.5s, opacity 0.5s;
  transition-delay: ${(props) => props.$delay || "0s"};

  &.is-fadeIn {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default FadeInOnScroll;
