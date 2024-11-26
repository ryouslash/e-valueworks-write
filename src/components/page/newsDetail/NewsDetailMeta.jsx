import styled from "styled-components";
import * as variables from "/src/assets/js/variable.js";
import { formatDate, formatDate2 } from "/src/assets/js/common.js";

const NewsMeta = ({ newsItem }) => {
  return (
    <div>
      <NewsTItle>{newsItem.title}</NewsTItle>
      <StyledFlexWrap>
        <time dateTime={formatDate2(newsItem._sys.createdAt)}>
          {formatDate(newsItem._sys.createdAt)}
        </time>
        {newsItem.categories && newsItem.categories.length > 0 && (
          <ul>
            {newsItem.categories.map((category) => (
              <li key={category._id}>
                <a href={category.slug}>{category.name}</a>
              </li>
            ))}
          </ul>
        )}
      </StyledFlexWrap>
      {newsItem.coverImage && (
        <div>
          <img
            src={newsItem.coverImage.src}
            width={newsItem.coverImage.width}
            height={newsItem.coverImage.height}
            alt={newsItem.coverImage.altText || ""}
          />
        </div>
      )}
    </div>
  );
};

const NewsTItle = styled.h1`
  font-size: ${variables.fontL};
`;

const StyledFlexWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0.8em 0;
  column-gap: 1em;
  ul {
    display: flex;
    column-gap: 0.5em;
    li {
      a {
        display: block;
        border: 1px solid ${variables.subColor};
        color: ${variables.subColor};
        padding: 0.1em 0.6em;
        transition: color 0.5s, background-color 0.5s;

        &:hover {
          background-color: ${variables.subColor};
          color: #ffffff;
        }
      }
    }
  }
`;

export default NewsMeta;
