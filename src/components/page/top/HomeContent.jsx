import React from "react";
import Content from "/src/components/common/Content.jsx";
import Mv from "/src/components/page/top/mv/Mv.jsx";
import NewsSection from "/src/components/page/top/news/NewsSection.jsx";

const HomeContent = () => {
  return (
    <Content>
      <Mv />
      <NewsSection />
    </Content>
  );
};

export default HomeContent;
