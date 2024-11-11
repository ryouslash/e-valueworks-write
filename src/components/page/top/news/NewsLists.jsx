import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "/src/store/modules/newsSlice.js";
import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";

const NewsLists = () => {
  const dispatch = useDispatch();
  const newsItems = useSelector((state) => state.news.items);
  const status = useSelector((state) => state.news.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNews()); // 初回レンダリング時にデータを取得
    }
  }, [dispatch, status]);

  // 日付データをY/m/dにフォーマットする関数
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  // 日付データをY-m-dにフォーマットする関数
  const formatDate2 = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <StyledNewsLists>
      {status === "loading" && <p>データを取得中...</p>}
      {status === "failed" && <p>データの取得に失敗しました</p>}
      {status === "succeeded" &&
        newsItems.map((newsItem) => (
          <li key={newsItem._id}>
            <time dateTime={formatDate2(newsItem._sys.createdAt) || ""}>
              {formatDate(newsItem._sys.createdAt) || ""}
            </time>
            <div>
              <a href="#">お知らせ</a>
            </div>
            <div>
              <a href="#">{newsItem.title || "タイトル情報なし"}</a>
            </div>
          </li>
        ))}
    </StyledNewsLists>
  );
};

const StyledNewsLists = styled.ul`
  position: relative;
  overflow: hidden;
`;

export default NewsLists;
