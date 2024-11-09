import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";

const TypingTextH1 = ({ text, isTypingFinished, onTypingComplete }) => {
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
        if (onTypingComplete) onTypingComplete(); // タイピング完了を通知
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
          <StyledLine $isTypingFinished={isTypingFinished} $delay={index * 0.5}>
            {line}
          </StyledLine>
          {index < displayedText.split("¥").length - 1 && <br />}
        </React.Fragment>
      ))}
    </StyledText>
  );
};

const StyledText = styled.h1`
  font-size: clamp(1.7rem, 1.2rem + 1.5625vw, 3.2rem);
  font-weight: 700;
  margin-bottom: 0.8em;
  letter-spacing: -0.5px;

  ${media.md`
    text-align: center;
  `}
`;

const StyledLine = styled.span`
  position: relative;
  overflow: hidden;
  display: inline-block;
  padding: 3px 10px;
  color: ${({ $isTypingFinished }) =>
    $isTypingFinished ? "#ffffff" : "inherit"};
  transition: color 1s ease ${({ $delay }) => $delay}s; /* テキストの色の遅延 */
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ $isTypingFinished }) => ($isTypingFinished ? "100%" : "0")};
    height: 100%;
    background-color: #91b3fa; /* 背景色 */
    transition: width 1s ease ${({ $delay }) => $delay}s; /* 背景色の遅延 */
    z-index: -1;
  }
`;

export default TypingTextH1;
