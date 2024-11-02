import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";

const TypingTextH1 = ({ text }) => {
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
    };
  }, [text]);

  return (
    <StyledText>
      {displayedText.split("¥").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < displayedText.split("¥").length - 1 && <br />}
        </React.Fragment>
      ))}
    </StyledText>
  );
};

const StyledText = styled.h1`
  font-size: clamp(2rem, 1.8rem + 0.9375vw, 3.2rem);
  font-weight: 700;
  margin-bottom: 0.8em;

  ${media.md`
    text-align: center;
  `}

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

export default TypingTextH1;
