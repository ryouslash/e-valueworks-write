import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ latestNews, newsCategories }) => {
  return (
    <aside>
      <div>
        <h2>最新の投稿</h2>
        <ul>
          {latestNews.map((newsItem) => (
            <li key={newsItem._id}>
              <Link to={`/news/${newsItem._id}`}>
                {" "}
                <div>
                  {newsItem.coverImage && (
                    <img
                      src={newsItem.coverImage.src}
                      width={newsItem.coverImage.width}
                      height={newsItem.coverImage.height}
                      alt={newsItem.coverImage.altText || "お知らせサムネイル"}
                    />
                  )}
                </div>
                <h3>{newsItem.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>カテゴリー</h2>
        <div>
          <ul>
            {newsCategories.map((newsCategory) => (
              <li key={newsCategory._id}>
                <Link to={`/news/category/${newsCategory.slug}`}>
                  {" "}
                  <h3>{newsCategory.name}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
