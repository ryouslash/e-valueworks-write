import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import Container from "/src/components/common/Container.jsx";
import NewsLists from "/src/components/page/top/news/NewsLists.jsx";

const NewsSection = () => {
  return (
    <StyledNewsSection>
      <Container>
        <NewsLists />
      </Container>
    </StyledNewsSection>
  );
};

const StyledNewsSection = styled.section`
  background-color: #eee;
`;

export default NewsSection;
