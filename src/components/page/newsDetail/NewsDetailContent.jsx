// NewsDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const NewsDetailContent = () => {
  const { newsId } = useParams(); // URLパラメータからニュースIDを取得
  const newsItems = useSelector((state) => state.news.items); // Reduxからニュース一覧を取得

  // ニュースIDに基づいて該当するニュース項目を取得
  const newsItem = newsItems.find((item) => item.id === newsId);

  if (!newsItem) {
    return <p>ニュースが見つかりません</p>;
  }

  return (
    <div>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.content}</p>
      <time dateTime={newsItem._sys.createdAt}>
        {new Date(newsItem._sys.createdAt).toLocaleDateString()}
      </time>
    </div>
  );
};

export default NewsDetailContent;
