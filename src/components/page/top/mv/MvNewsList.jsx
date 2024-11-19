import React from "react";
import { Link } from "react-router-dom";

import { formatDate, formatDate2 } from "/src/assets/js/common.js";

import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import * as colors from "/src/assets/js/colors.js";

const MvNewsList = ({ newsItem, isActive }) => {
  return (
    <StyledMvNewsList className={isActive ? "is-slideIn" : ""}>
      <time dateTime={formatDate2(newsItem._sys.createdAt) || ""}>
        {formatDate(newsItem._sys.createdAt) || ""}
      </time>
      <div className="tags">
        {newsItem.tags && newsItem.tags.length > 0 ? (
          <>
            {newsItem.tags.map((tag, index) => (
              <a key={index} href={tag.slug}>
                {tag.name}
              </a> // オブジェクトのnameプロパティを表示
            ))}
          </>
        ) : (
          <span>タグ情報なし</span>
        )}
      </div>
      <div className="title">
        <Link to={`/news/${newsItem._id}`}>
          {newsItem.title || "タイトル情報なし"}
        </Link>
      </div>
    </StyledMvNewsList>
  );
};

const StyledMvNewsList = styled.li`
  display: grid;
  align-items: center;
  gap: 0.8em;
  grid-template-columns: auto auto 1fr;
  position: absolute;
  left: 0;
  top: 100%;
  transition: top 1s, opacity 1s;
  opacity: 0;

  ${media.md`
    grid-template-columns: auto 1fr;
  `}

  &.is-slideIn {
    opacity: 1;
    position: sticky;
    top: 0;
  }

  > time {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  > .tags {
    grid-column: 2/3;
    grid-row: 1/2;
    > a {
      background-color: ${colors.subColor};
      color: #ffffff;
      font-weight: bolder;
      padding: 0.1em 0.6em;
      transition: color 0.5s, background-color 0.5s;
      border: 1px solid #ffffff;

      &:hover {
        color: ${colors.subColor};
        background-color: #ffffff;
        border: 1px solid ${colors.subColor};
      }
    }
  }

  > .title {
    grid-column: 3/4;
    grid-row: 1/2;

    ${media.md`
      grid-column: 1/3;
      grid-row: 2/3; 
    `}

    a {
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }
`;

export default MvNewsList;
