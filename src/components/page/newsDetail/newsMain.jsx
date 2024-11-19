import React from "react";
import { Link } from "react-router-dom";
import { formatDate, formatDate2 } from "/src/assets/js/common.js";

const NewsMain = ({ newsItems, newsItem }) => {
  // 現在の記事のインデックスを取得
  const currentIndex = newsItems.findIndex((item) => item._id === newsItem._id);

  // 前後のニュース項目を取得
  const prevItem = currentIndex > 0 ? newsItems[currentIndex - 1] : null;
  const nextItem =
    currentIndex < newsItems.length - 1 ? newsItems[currentIndex + 1] : null;

  return (
    <main>
      <div>
        <div className="newsMeta">
          <h1>{newsItem.title}</h1>
          <time dateTime={formatDate2(newsItem._sys.createdAt)}>
            {formatDate(newsItem._sys.createdAt)}
          </time>
          {newsItem.coverImage && (
            <div className="news-thumbnail">
              <img
                src={newsItem.coverImage.src}
                width={newsItem.coverImage.width}
                height={newsItem.coverImage.height}
              />
            </div>
          )}
        </div>

        <div className="newsContent">
          <div dangerouslySetInnerHTML={{ __html: newsItem.body }} />
        </div>
      </div>
      {/* 前後リンク */}
      <nav>
        {prevItem && (
          <Link to={`/news/${prevItem._id}`}>&laquo; {prevItem.title}</Link>
        )}
        {nextItem && (
          <Link to={`/news/${nextItem._id}`}>{nextItem.title} &raquo;</Link>
        )}
      </nav>
    </main>
  );
};

export default NewsMain;
