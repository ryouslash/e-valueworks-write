import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import Content from "/src/components/common/Content.jsx";
import Container from "/src/components/common/Container.jsx";

const News = () => {
  // Reduxからお知らせニュース一覧を取得
  const newsItems = useSelector((state) => state.news.items);
  const newsStatus = useSelector((state) => state.news.status);

  return (
    <Content>
      <Container>
        <h1>テスト</h1>
      </Container>
    </Content>
  );
};

export default News;
