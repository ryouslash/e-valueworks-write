import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "/src/store/modules/newsSlice";
import { fetchCategories } from "/src/store/modules/categoriesSlice";
import GlobalStyle from "/src/assets/styles/GlobalStyles"; // 作成したグローバルスタイルをインポート

import Header from "/src/components/Header/Header";
import Home from "/src/pages/Home";
import About from "/src/pages/About";
import NewsDetail from "/src/pages/NewsDetail";
import News from "/src/pages/News";
import NewsCategory from "/src/pages/NewsCategory";
import Contact from "/src/pages/Contact";

const App = () => {
  const dispatch = useDispatch();
  const newsStatus = useSelector((state) => state.news.status);
  const categoriesStatus = useSelector((state) => state.categories.status);

  useEffect(() => {
    if (newsStatus === "idle") {
      dispatch(fetchNews());
    }
    if (categoriesStatus === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, newsStatus, categoriesStatus]);

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* お知らせ一覧ページのルート */}
        <Route path="/news" element={<News />} />
        {/* お知らせ詳細ページのルート */}
        <Route path="/news/:newsId" element={<NewsDetail />} /> {/* 修正 */}
        {/* お知らせカテゴリー一覧ページのルート */}
        <Route
          path="/news/category/:categoryId"
          element={<NewsCategory />}
        />{" "}
        {/* 修正 */}
      </Routes>
    </Router>
  );
};

export default App;
