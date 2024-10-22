// src/App.jsx
import React, { useState } from "react";
import Header from "/src/components/Header/Header.jsx";
import Mv from "/src/components/Contents/Mv.jsx";

const App = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <>
      <Header setHeaderHeight={setHeaderHeight} />
      <content>
        <Mv headerHeight={headerHeight} />
      </content>
    </>
  );
};

export default App;
