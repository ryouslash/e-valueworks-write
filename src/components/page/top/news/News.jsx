import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import Container from "/src/components/common/Container.jsx";
import NewsLists from "/src/components/page/top/news/NewsLists.jsx";

const News = () => {
  return (
    <StyledNews>
      <Container>
        <NewsLists />
      </Container>
    </StyledNews>
  );
};

const StyledNews = styled.section`
  background-color: #eee;
`;

export default News;
