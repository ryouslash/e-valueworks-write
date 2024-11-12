// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "/src/store/index.js";
import Home from "/src/pages/Home.jsx";
import About from "/src/pages/About.jsx";
import NewsDetail from "/src/pages/NewsDetail.jsx";
import Contact from "/src/pages/Contact.jsx";
import Header from "/src/components/Header/Header.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news/:newsId" element={<NewsDetail />} />{" "}
          {/* 詳細ページのルート */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
