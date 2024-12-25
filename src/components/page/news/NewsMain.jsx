import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NewsMain = ({ newsItems }) => {
  // 抜粋を作成する関数
  const extractExcerpt = (html, length = 110) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    return text.length > length ? `${text.substring(0, length)}...` : text;
  };

  const itemsPerPage = 1; // 1ページあたりの表示数
  const [currentPage, setCurrentPage] = useState(1);

  // 総ページ数を計算
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  // 現在のページに表示するニュースを取得
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNews = newsItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main>
      <ul>
        {currentNews.map((newsItem) => (
          <li key={newsItem._id}>
            <StyledLink to={`/news/${newsItem._id}`}>
              {newsItem.coverImage && (
                <div className="left">
                  <img
                    src={newsItem.coverImage.src}
                    width={newsItem.coverImage.width}
                    height={newsItem.coverImage.height}
                    alt={newsItem.coverImage.altText || ""}
                  />
                </div>
              )}
              <div className="right">
                <h2>{newsItem.title}</h2>
                <p>{extractExcerpt(newsItem.body, 110)}</p>
              </div>
            </StyledLink>
          </li>
        ))}
      </ul>

      {/* ページネーションUI */}
      <Pagination>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          前へ
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          次へ
        </button>
      </Pagination>
    </main>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  gap: 30px;
  padding: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  .left {
    max-width: 300px;
    flex-shrink: 0;
  }

  .right {
    flex: 1;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

  button {
    padding: 10px 15px;
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;

    &.active {
      background-color: #007bff;
      color: white;
      font-weight: bold;
    }

    &:disabled {
      background-color: #f9f9f9;
      color: #ccc;
      cursor: not-allowed;
    }
  }
`;

export default NewsMain;
