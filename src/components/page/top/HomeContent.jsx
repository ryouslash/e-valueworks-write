import React from "react";
import Content from "/src/components/common/Content.jsx";
import Mv from "/src/components/page/top/mv/Mv.jsx";
import News from "/src/components/page/top/news/News.jsx";

const HomeContent = () => {
  return (
    <Content>
      <Mv />
      <News />
    </Content>
  );
};

export default HomeContent;
