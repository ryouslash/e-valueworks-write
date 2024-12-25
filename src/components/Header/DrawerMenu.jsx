import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import DrawerItem from "/src/components/header/DrawerItem.jsx";
import Container from "/src/components/common/Container.jsx";

const DrawerMenu = () => {
  const drawerItems = [
    { href: "/", label: "ホーム", subLabel: "HOME" },
    { href: "/about", label: "アバウト", subLabel: "ABOUT" },
    { href: "#", label: "料金", subLabel: "PRICE" },
    { href: "#", label: "お客様の声", subLabel: "VOICE" },
    { href: "#", label: "お問い合わせ", subLabel: "CONTACT" },
  ];

  return (
    <StyledDrawerMenu>
      <Container>
        <ul>
          {drawerItems.map((item, index) => (
            <DrawerItem
              key={index}
              href={item.href}
              label={item.label}
              subLabel={item.subLabel}
            />
          ))}
        </ul>
      </Container>
    </StyledDrawerMenu>
  );
};

const StyledDrawerMenu = styled.div`
  margin-top: 1rem;

  ${media.lgUp`
    display: none !important;
  `}
`;

export default DrawerMenu;
