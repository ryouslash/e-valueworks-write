import { formatDate, formatDate2 } from "/src/assets/js/common.js";

import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import * as colors from "/src/assets/js/colors.js";

const NewsList = ({ newsItem, isActive }) => {
  return (
    <StyledNewsList className={isActive ? "is-active" : ""}>
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
        <a href="#">{newsItem.title || "タイトル情報なし"}</a>
      </div>
    </StyledNewsList>
  );
};

const StyledNewsList = styled.li`
  display: grid;
  align-items: center;
  gap: 0.8em;
  padding: 10px 0;
  grid-template-columns: auto auto 1fr;
  position: absolute;
  left: 0;
  top: 100%;
  transition: top 1s, opacity 1s;
  opacity: 0;

  &.is-active {
    opacity: 1;
    position: sticky;
    top: 0;
  }

  .tags a {
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

  .title a {
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

export default NewsList;
