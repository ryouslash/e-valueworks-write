import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import Container from "/src/components/common/Container.jsx";
import MvNewsLists from "/src/components/page/top/mv/MvNewsLists.jsx";

const MvNews = ({ isTypingFinished }) => {
  return (
    <StyledMvNews>
      <Container>
        <MvNewsLists isTypingFinished={isTypingFinished} />
      </Container>
    </StyledMvNews>
  );
};

const StyledMvNews = styled.div`
  background-color: #eee;
`;

export default MvNews;
