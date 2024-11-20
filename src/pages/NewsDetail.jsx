// NewsDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import Content from "/src/components/common/Content.jsx";
import Container from "/src/components/common/Container.jsx";
import LoadingScreen from "/src/components/common/LoadingScreen.jsx";
import Main from "/src/components/page/newsDetail/newsMain.jsx";
import Sidebar from "/src/components/sidebar/Sidebar.jsx";

const NewsDetail = () => {
  // URLパラメータからニュースIDを取得
  const { newsId } = useParams();
  const [minimumLoading, setMinimumLoading] = useState(true); // 最低表示時間の制御

  // Reduxからお知らせニュース一覧を取得
  const newsItems = useSelector((state) => state.news.items);
  const newsStatus = useSelector((state) => state.news.status);

  // Reduxからお知らせタグ一覧を取得
  const newsCategories = useSelector((state) => state.categories.items);
  console.log(JSON.stringify(newsCategories));

  // ニュースIDに基づいて該当するニュース項目を取得
  const currentIndex = newsItems.findIndex((item) => item._id === newsId);
  const newsItem = newsItems[currentIndex];

  // 最低1秒間のローディング時間を保証
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinimumLoading(false);
    }, 500);

    return () => clearTimeout(timer); // クリーンアップ
  }, []);

  // 状態に応じた表示
  if (newsStatus === "loading" || newsItems.length === 0 || minimumLoading) {
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
        </Container>
      </Content>
    );
  }

  // 無効なIDの場合は404ページへリダイレクト
  if (!newsItem) {
    return <Navigate to="/404" />;
  }

  return (
    <Content>
      <Container>
        <TwoColumn>
          <Main newsItems={newsItems} newsItem={newsItem} />
          <Sidebar
            latestNews={newsItems.slice(0, 5)}
            newsCategories={newsCategories}
          />
        </TwoColumn>
      </Container>
    </Content>
  );
};

const TwoColumn = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 60px 0;

  ${media.md`
    flex-direction:column;
  `}

  > main {
    flex: 1;
  }

  > aside {
    max-width: 300px;

    ${media.md`
      max-width: initial;
  `}
  }
`;

export default NewsDetail;
