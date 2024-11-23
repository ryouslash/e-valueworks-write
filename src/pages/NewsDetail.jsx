// NewsDetail.jsx
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import Content from "/src/components/common/Content.jsx";
import Container from "/src/components/common/Container.jsx";
import LoadingScreen from "/src/components/common/LoadingScreen.jsx";
import Main from "/src/components/page/newsDetail/NewsMain.jsx";
import Sidebar from "/src/components/sidebar/Sidebar.jsx";

const NewsDetail = () => {
  // URLパラメータからニュースIDを取得
  const { newsId } = useParams();

  // Reduxからお知らせニュース一覧を取得
  const newsItems = useSelector((state) => state.news.items);
  const newsStatus = useSelector((state) => state.news.status);

  // ニュースIDに基づいて該当するニュース項目を取得
  const currentIndex = newsItems.findIndex((item) => item._id === newsId);
  const newsItem = newsItems[currentIndex];

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
          <Main />
          <Sidebar />
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
