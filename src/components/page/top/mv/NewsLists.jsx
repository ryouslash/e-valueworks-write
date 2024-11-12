import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchNews } from "/src/store/modules/newsSlice.js";

import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";

import NewsList from "/src/components/page/top/mv/NewsList.jsx"; // 分割したコンポーネントをインポート

const NewsLists = ({ isTypingFinished }) => {
  const dispatch = useDispatch();
  const newsItems = useSelector((state) => state.news.items);
  const newsStatus = useSelector((state) => state.news.status);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (newsStatus === "idle") {
      dispatch(fetchNews()); // 初回レンダリング時にデータを取得
    }
  }, [dispatch, newsStatus]);

  useEffect(() => {
    if (
      isTypingFinished &&
      newsStatus === "succeeded" &&
      newsItems.length > 0
    ) {
      // 最初の1回だけ2秒後に実行
      const initialTimeout = setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % newsItems.length);

        // 5秒ごとに実行するインターバルを設定
        const interval = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
        }, 5000);

        // クリーンアップ関数で初回タイムアウトとインターバルをクリア
        return () => {
          clearTimeout(initialTimeout);
          clearInterval(interval);
        };
      }, 1000); // 最初の1回だけ1秒後に実行
    }
  }, [isTypingFinished, newsStatus, newsItems.length]);

  return (
    <StyledNewsLists>
      {newsStatus === "loading" && <p>データを取得中...</p>}
      {newsStatus === "failed" && <p>データの取得に失敗しました</p>}
      {newsStatus === "succeeded" &&
        newsItems.map((newsItem, index) => (
          <NewsList
            key={index}
            newsItem={newsItem}
            isActive={index === activeIndex} // isActiveのプロパティを追加
          />
        ))}
    </StyledNewsLists>
  );
};

const StyledNewsLists = styled.ul`
  position: relative;
  overflow: hidden;
`;

export default NewsLists;
