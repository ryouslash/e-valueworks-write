import React from "react";
import GlobalStyle from "/src/assets/styles/GlobalStyles"; // 作成したグローバルスタイルをインポート
import Header from "/src/components/Header/Header";
import Home from "/src/pages/Home";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
};

export default App;
