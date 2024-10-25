import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledText = styled.h1`
  @keyframes flashing {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  &:after {
    content: "";
    animation: flashing 1s linear infinite;
    border-right: 10px solid #333;
    margin-left: 0.5em;
    opacity: 0;
  }
`;

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    const typing = () => {
      if (indexRef.current < text.length) {
        const nextChar = text[indexRef.current];
        setDisplayedText((prev) => prev + nextChar);
        indexRef.current += 1;
      } else {
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(typing, 100);

    return () => {
      clearInterval(intervalId);
      setDisplayedText("");
      indexRef.current = 0;
    };
  }, [text]);

  return (
    <StyledText className="js-typing title">
      {displayedText.split("¥").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < displayedText.split("¥").length - 1 && <br />}
        </React.Fragment>
      ))}
    </StyledText>
  );
};

export default TypingText;
