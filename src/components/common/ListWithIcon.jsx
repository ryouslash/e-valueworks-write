import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListWithIcon = ({ text, icon, className, color }) => {
  return (
    <StyledListWithIcon $color={color}>
      <FontAwesomeIcon icon={icon} className={className} />
      {text}
    </StyledListWithIcon>
  );
};

const StyledListWithIcon = styled.li`
  padding-left: 1.2em;
  position: relative;

  > svg {
    left: 0;
    position: absolute;
    top: 8%;
    color: ${(props) => props.$color || "#333333"};
  }
`;

export default ListWithIcon;
