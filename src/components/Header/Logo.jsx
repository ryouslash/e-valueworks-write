import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import logo from "/src/assets/img/logo.svg";

const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">
        <img src={logo} />
      </Link>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  max-width: 250px;

  ${media.sm`
    max-width: 200px;
  `}
`;

export default Logo;
