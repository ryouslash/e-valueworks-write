import styled from "styled-components";

const NavItem = ({ href, label, subLabel }) => {
  return (
    <StyledNavItem>
      <a href={href}>
        {label}
        <span>{subLabel}</span>
      </a>
    </StyledNavItem>
  );
};

const StyledNavItem = styled.li`
  a {
    text-decoration: none;
    color: #333;
    display: block;
    padding: 2rem 1.5rem;
    position: relative;
    transition: opacity 0.3s;

    &:after {
      background-color: #aaa;
      bottom: 0;
      content: "";
      display: block;
      height: 0.2rem;
      left: 0;
      position: absolute;
      transition: width 0.3s;
      width: 0;
    }

    &:hover {
      opacity: 0.7;

      &:after {
        width: 100%;
      }
    }

    > span {
      color: #777;
      display: block;
      font-size: 1.1rem;
      margin-top: 0.5rem;
      text-align: center;
    }
  }
`;

export default NavItem;
