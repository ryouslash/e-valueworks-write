import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import logo from "/src/assets/img/logo.svg";

const Logo = () => {
  return (
    <StyledLogo>
      <a href="/">
        <img src={logo} alt="E-VALUE WORKS WRITE" width={466} height={60} />
      </a>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  max-width: 25rem;
  width: 100%;

  ${media.sm`
    max-width: 20rem;
  `}
`;

export default Logo;
