import React from "react";
import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import NewsDetailMeta from "/src/components/page/newsDetail/NewsDetailMeta";
import NewsDetailContent from "/src/components/page/newsDetail/NewsDetailContent";
import NewsDetailPagination from "/src/components/page/newsDetail/NewsDetailPagination";

const NewsMain = ({ newsItems, newsItem }) => {
  return (
    <StyledMainWrap>
      <article>
        <NewsDetailMeta newsItem={newsItem} />
        <NewsDetailContent newsItem={newsItem} />
      </article>
      <NewsDetailPagination newsItems={newsItems} newsItem={newsItem} />
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
