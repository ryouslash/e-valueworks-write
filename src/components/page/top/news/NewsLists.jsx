import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "/src/store/slices/newsSlice.js";
import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";

const NewsLists = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.items); // Redux storeからお知らせ情報を取得
  const status = useSelector((state) => state.news.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNews()); // 初回レンダリング時にデータを取得
    }
  }, [dispatch, status]);

  return (
    <StyledNewsLists>
      {status === "loading" && <p>データを取得中...</p>}
      {status === "failed" && <p>データの取得に失敗しました</p>}
      {status === "succeeded" &&
        news.map((item) => (
          <li key={item.id}>
            <time>{new Date(item.createdAt).toLocaleDateString()}</time>
            <div>
              <a href="#">お知らせ</a>
            </div>
            <div>
              <a href="#">{item.title || "タイトルなし"}</a>
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
