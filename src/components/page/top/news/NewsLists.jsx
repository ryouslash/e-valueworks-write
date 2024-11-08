import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import NewsList from "/src/components/page/top/news/NewsList.jsx";

const NewsLists = () => {
  return (
    <StyledNewsLists>
      <NewsList />
    </StyledNewsLists>
  );
};

const StyledNewsLists = styled.ul`
  position: relative;
  /* overflow: hidden; */
`;

export default NewsLists;
