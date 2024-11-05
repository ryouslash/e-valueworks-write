// FadeInWithTimer.jsx
import styled from "styled-components";
import { useState, useEffect } from "react";

const FadeInAfterDelay = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledFadeInAfterDelay className={isVisible ? "is-active" : ""}>
      {children}
    </StyledFadeInAfterDelay>
  );
};

const StyledFadeInAfterDelay = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: 0.5s;

  &.is-active {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default FadeInAfterDelay;
