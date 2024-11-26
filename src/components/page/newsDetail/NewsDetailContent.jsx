import styled from "styled-components";
import * as variables from "/src/assets/js/variable.js";

const NewsContent = ({ newsItem }) => {
  return (
    <StyledNewsContent dangerouslySetInnerHTML={{ __html: newsItem.body }} />
  );
};

const StyledNewsContent = styled.div`
  > * {
    clear: both;
    margin-bottom: 1em;
  }

  > :first-child {
    margin-top: 0 !important;
  }

  > :last-child,
  dd > :last-child,
  div > :last-child {
    margin-bottom: 0 !important;
  }

  h2 {
    font-size: ${variables.fontL};
    background-color: #eee;
    border-left: 3px solid ${variables.keyColor};
    margin: 2em 0 0.8em;
    padding: 0.3em 0.5em;
  }

  h3 {
    font-size: ${variables.fontM};
    border-bottom: 3px solid ${variables.keyColor};
    margin: 2em 0 0.8em;
    padding-bottom: 0.3em;
  }

  ul,
  ol {
    padding-left: 1em;

    li {
      margin: 0.2em 0;

      &::marker {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        margin-left: 1em;
        margin-top: 0.2em;
      }

      ul {
        li {
          list-style-type: circle;
        }
      }
    }
  }

  ul {
    li {
      list-style-type: disc;
    }
  }

  ol {
    li {
      list-style-type: decimal;
    }
  }

  a {
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }

  &:not(pre) code {
    color: #333333;
    font-size: 0.9em;
    letter-spacing: 0;
    line-height: 1;
    background: #f7f7f7;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin: 0 0.3em;
    padding: 0.25em 0.5em;
  }

  blockquote {
    position: relative;
    padding: 30px 15px 10px;
    box-sizing: border-box;
    background: #efefef;
    color: #555;
    border-left: 5px solid ${variables.keyColor};

    &:before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      position: absolute;
      top: 10px;
      left: 15px;
      background-image: url("/src/assets/img/quotation.svg");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center bottom;
    }

    p {
      padding: 0;
      margin: 10px 0;
      line-height: 1.7;
    }

    cite {
      display: block;
      text-align: right;
      color: #888888;
      font-size: 0.9em;
    }
  }
`;

export default NewsContent;
