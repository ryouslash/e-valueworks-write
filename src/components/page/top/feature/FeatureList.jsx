import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import { subColor } from "/src/assets/js/variable.js";

import FadeInOnScroll from "/src/components/common/FadeInOnScroll";

const FeatureList = ({ img, heading, text }) => {
  return (
    <StyledFeatureList>
      <FadeInOnScroll>
        <div className="left">{<img src={img} alt="" />} </div>
        <div className="right">
          <h3>{heading}</h3>
          {text}
        </div>
      </FadeInOnScroll>
    </StyledFeatureList>
  );
};

const StyledFeatureList = styled.li`
  &:first-of-type {
    .left {
      &::before {
        content: "01";
      }
    }
  }

  &:nth-of-type(2) {
    .left {
      &::before {
        content: "02";
      }
    }
  }

  &:nth-of-type(3) {
    .left {
      &::before {
        content: "03";
      }
    }
  }

  &:nth-of-type(4) {
    .left {
      &::before {
        content: "04";
      }
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 4rem;
  }

  &:nth-of-type(even) {
    > div {
      flex-direction: row-reverse;

      ${media.md`
      flex-direction: column;
    `}
    }
  }

  > div {
    display: flex;
    align-items: flex-start;
    gap: 4rem;

    ${media.md`
      flex-direction: column;
      gap: 3rem;
    `}

    .left {
      width: 40%;
      flex-shrink: 0;
      position: relative;
      box-shadow: 0 0 0.6rem #dddddd;

      ${media.md`
        width: 100%;
      `}

      &::before {
        position: absolute;
        left: 0;
        top: 0;
        font-size: 3.6rem;
        font-style: italic;
        font-weight: 600;
        background-color: ${subColor};
        color: #ffffff;
        padding: 1rem;
        font-family: "Roboto", sans-serif;
      }
    }

    .right {
      flex: 1;

      h3 {
        font-size: 2.2rem;
        margin-bottom: 1em;

        ${media.sm`
          font-size: 1.8rem;
      `}
      }

      p {
        line-height: 1.6;
        &:not(:last-of-type) {
          margin-bottom: 1em;
        }
      }
    }
  }
`;

export default FeatureList;
