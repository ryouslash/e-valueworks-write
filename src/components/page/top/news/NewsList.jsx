import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { client } from "/src/api/newtClient";

const NewsList = () => {
  const [news, setNews] = useState([]); // 複数の記事データ用のstate

  useEffect(() => {
    // 複数の記事を取得してstateに保存
    client
      .getContents({
        appUid: "blog",
        modelUid: "article",
        limit: 3, // 取得件数を3件に設定
        order: "-createdAt", // 作成日の降順で取得
      })
      .then((response) => {
        setNews(response.items); // 記事の配列をstateに保存
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <StyledNewsList>
      {news.length > 0 ? (
        news.map((item) => (
          <li key={item.id} className="is-slideIn">
            <time dateTime={item.createdAt}>
              {new Date(item.createdAt).toLocaleDateString()}
            </time>
            <div>
              <a href="#">お知らせ</a>
            </div>
            <div>
              <a href="#">{item.title || "タイトルなし"}</a>
            </div>
          </li>
        ))
      ) : (
        <p>データを取得中...</p>
      )}
    </StyledNewsList>
  );
};

const StyledNewsList = styled.ul`
  padding: 0;
  list-style: none;

  .is-slideIn {
    align-items: center;
    display: grid;
    gap: 0.8em;
    grid-template-columns: auto auto 1fr;
    padding: 10px 0;
    transition: top 1s, opacity 1s;
    width: 100%;
  }
`;

export default NewsList;
