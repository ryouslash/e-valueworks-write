import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const NewsPagination = ({ newsItems, newsItem }) => {
  // 現在の記事のインデックスを取得
  const currentIndex = newsItems.findIndex((item) => item._id === newsItem._id);

  // 前後のニュース項目を取得
  const prevItem = currentIndex > 0 ? newsItems[currentIndex - 1] : null;
  const nextItem =
    currentIndex < newsItems.length - 1 ? newsItems[currentIndex + 1] : null;

  return (
    <>
      {/* 前後リンク */}
      <StyledPagination>
        <li className="prev">
          {prevItem && (
            <Link to={`/news/${prevItem._id}`}>
              <FontAwesomeIcon icon={faChevronLeft} /> {prevItem.title}
            </Link>
          )}
        </li>
        <li className="next">
          {nextItem && (
            <Link to={`/news/${nextItem._id}`}>
              {nextItem.title} <FontAwesomeIcon icon={faChevronRight} />{" "}
            </Link>
          )}
        </li>
      </StyledPagination>
    </>
  );
};

const StyledPagination = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1em;

  .prev {
    flex-grow: 1;
    text-align: left;
  }

  .next {
    flex-grow: 1;
    text-align: right;
  }
`;

export default NewsPagination;
