import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";

import Container from "/src/components/common/Container";
import FadeInOnScroll from "/src/components/common/FadeInOnScroll";
import FeatureLists from "/src/components/page/top/feature/FeatureLists";

const Feature = () => {
  return (
    <StyledFeature>
      <Container>
        <FadeInOnScroll>
          <h2>当サービスの4つの特長</h2>
        </FadeInOnScroll>
        <FeatureLists />
      </Container>
    </StyledFeature>
  );
};

const StyledFeature = styled.section`
  padding: 6rem 0;

  h2 {
    background-color: #eeeeee;
    font-size: 2.8rem;
    text-align: center;
    padding: 1rem 2rem;
    letter-spacing: 0.02em;
    margin-bottom: 6rem;

    ${media.md`
      font-size: 2.4rem;
      `}

      ${media.sm`
      font-size: 2.2rem;
      margin-bottom: 3rem;
      `}
  }
`;

export default Feature;
