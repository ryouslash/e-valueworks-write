import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import Container from "/src/components/common/Container.jsx";
import NewsLists from "/src/components/page/top/mv/NewsLists.jsx";

const News = ({ isTypingFinished }) => {
  return (
    <StyledNewsSection>
      <Container>
        <NewsLists isTypingFinished={isTypingFinished} />
      </Container>
    </StyledNewsSection>
  );
};

const StyledNewsSection = styled.div`
  background-color: #eee;
`;

export default News;
