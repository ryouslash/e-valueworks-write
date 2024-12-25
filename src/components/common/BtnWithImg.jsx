import styled from "styled-components";

const BtnWithImg = ({ label, href, img, bgColor, color, width, height }) => {
  return (
    <StyledBtnWithImg href={href} $bgColor={bgColor} $color={color}>
      <img src={img} width={width} height={height} />
      {label}
    </StyledBtnWithImg>
  );
};

const StyledBtnWithImg = styled.a`
  align-items: center;
  box-shadow: 0.2rem 0.2rem 0.6rem #aaa;
  display: flex;
  font-weight: 700;
  justify-content: center;
  left: 0;
  padding: 2rem 0;
  position: relative;
  top: 0;
  transition: opacity 0.3s, top 0.3s, left 0.3s;
  width: 100%;
  background-color: ${(props) => props.$bgColor || "#dcdcdc"};
  color: ${(props) => props.$color || "#333333"};

  &:hover {
    opacity: 0.8;
    top: 0.3rem;
    left: 0.3rem;
  }

  > img {
    width: 2rem;
    margin-right: 1rem;
  }
`;

export default BtnWithImg;
