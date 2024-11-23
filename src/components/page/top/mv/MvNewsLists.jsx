import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";

import MvNewsList from "/src/components/page/top/mv/MvNewsList.jsx"; // 分割したコンポーネントをインポート

const MvNewsLists = ({ isTypingFinished }) => {
  const newsItems = useSelector((state) => state.news.items);
  const status = useSelector((state) => state.news.status);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (isTypingFinished && status === "succeeded" && newsItems.length > 1) {
      // 最初の1回だけ2秒後に実行
      const initialTimeout = setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % newsItems.length);

        // 5秒ごとに実行するインターバルを設定
        const interval = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
        }, 8000);

        // クリーンアップ関数で初回タイムアウトとインターバルをクリア
        return () => {
          clearTimeout(initialTimeout);
          clearInterval(interval);
        };
      }, 2000); // 最初の1回だけ2秒後に実行
    }
  }, [isTypingFinished, status, newsItems.length]);

  return (
    <StyledMvNewsLists>
      {status === "loading" && <p>データを取得中...</p>}
      {status === "failed" && <p>データの取得に失敗しました</p>}
      {status === "succeeded" &&
        newsItems.map((newsItem, index) => (
          <MvNewsList
            key={index}
            newsItem={newsItem}
            isActive={newsItems.length === 1 || index === activeIndex}
          />
        ))}
    </StyledMvNewsLists>
  );
};

const StyledMvNewsLists = styled.ul`
  position: relative;
  overflow: hidden;
  padding: 10px 0;
`;

export default MvNewsLists;
