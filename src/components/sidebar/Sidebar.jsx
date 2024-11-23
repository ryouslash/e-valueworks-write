import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import RecentPosts from "/src/components/sidebar/RecentPosts.jsx";
import Categories from "/src/components/sidebar/Categories.jsx";

const Sidebar = () => {
  // Reduxからお知らせニュース一覧を取得
  const newsItems = useSelector((state) => state.news.items);
  const latestNews = newsItems.slice(0, 5);

  // Reduxからお知らせタグ一覧を取得
  const newsCategories = useSelector((state) => state.categories.items);

  return (
    <StyledSidebar>
      <RecentPosts latestNews={latestNews} />
      <Categories newsCategories={newsCategories} />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  > *:first-child {
    margin-bottom: 30px;
  }
`;

export default Sidebar;
