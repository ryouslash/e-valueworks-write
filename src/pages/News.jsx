import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import styled from "styled-components";
import TwoColumn from "/src/assets/styles/styledComponents/TwoColumn";

import { media } from "/src/assets/js/mediaquery.js";
import Content from "/src/components/common/Content";
import Container from "/src/components/common/Container";
import LoadingScreen from "/src/components/common/LoadingScreen";
import NewsMain from "/src/components/page/news/NewsMain";
import NewsSidebar from "/src/components/sidebar/NewsSidebar";

const News = () => {
  // Reduxからお知らせニュース一覧を取得
  const newsItems = useSelector((state) => state.news.items);
  const newsStatus = useSelector((state) => state.news.status);

  // 状態に応じた表示
  if (newsStatus === "loading" || newsItems.length === 0) {
    return (
      <Content>
        <Container>
          <LoadingScreen />
        </Container>
      </Content>
    );
  }

  if (newsStatus === "failed") {
    return (
      <Content>
        <Container>
          <p style={{ padding: "60px 0" }}>
            データの取得に失敗しました。再度お試しください。
          </p>{" "}
          <NewsSidebar />
        </Container>
      </Content>
    );
  }

  return (
    <Content>
      <Container>
        <TwoColumn>
          <NewsMain newsItems={newsItems} />
          <NewsSidebar />
        </TwoColumn>
      </Container>
    </Content>
  );
};

export default News;
