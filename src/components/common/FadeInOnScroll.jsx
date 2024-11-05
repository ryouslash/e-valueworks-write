import styled from "styled-components";

import useFadeInOnScroll from "/src/hooks/useFadeInOnScroll.jsx";

const FadeInOnScroll = ({ children, delay }) => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <StyledFadeInOnScroll
      ref={ref}
      className={isVisible ? "is-active" : ""}
      $delay={delay}
    >
      {children}
    </StyledFadeInOnScroll>
  );
};

const StyledFadeInOnScroll = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: 0.5s;
  transition-delay: ${(props) => props.$delay || "0s"};

  &.is-active {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default FadeInOnScroll;
