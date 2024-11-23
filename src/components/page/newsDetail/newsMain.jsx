import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import NewsMeta from "/src/components/page/newsDetail/NewsMeta.jsx";
import NewsContent from "/src/components/page/newsDetail/NewsContent.jsx";
import NewsPagination from "/src/components/page/newsDetail/NewsPagination.jsx";

const NewsMain = () => {
  // URLパラメータからニュースIDを取得
  const { newsId } = useParams();

  // Reduxからお知らせニュース一覧を取得
  const newsItems = useSelector((state) => state.news.items);

  // ニュースIDに基づいて該当するニュース項目を取得
  const currentIndex = newsItems.findIndex((item) => item._id === newsId);
  const newsItem = newsItems[currentIndex];

  return (
    <StyledMainWrap>
      <article>
        <NewsMeta newsItem={newsItem} />
        <NewsContent newsItem={newsItem} />
      </article>
      <NewsPagination newsItems={newsItems} newsItem={newsItem} />
    </StyledMainWrap>
  );
};

const StyledMainWrap = styled.main`
  article {
    margin-bottom: 90px;
    > *:first-child {
      margin-bottom: 60px;
    }
  }
`;

export default NewsMain;
