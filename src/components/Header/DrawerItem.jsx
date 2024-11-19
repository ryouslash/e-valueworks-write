import { Link } from "react-router-dom";
import styled from "styled-components";

const DrawerItem = ({ href, label, subLabel }) => {
  return (
    <StyledDrawerItem>
      <Link to={href}>{label}</Link>
      <span>{subLabel}</span>
    </StyledDrawerItem>
  );
};

const StyledDrawerItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #aaaaaa;
  font-size: 1.3rem;
  padding: 10px 0;

  &:not(:last-of-type) {
    border-bottom: 1px dotted #333333;
  }
`;

export default DrawerItem;
