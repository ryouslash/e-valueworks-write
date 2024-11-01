import styled from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";
import NavItem from "/src/components/header/NavItem.jsx";

const navItems = [
  { href: "/", label: "ホーム", subLabel: "HOME" },
  { href: "/about", label: "アバウト", subLabel: "ABOUT" },
  { href: "#", label: "料金", subLabel: "PRICE" },
  { href: "#", label: "お知らせ", subLabel: "NEWS" },
  { href: "#", label: "お問い合わせ", subLabel: "CONTACT" },
];

const Nav = () => {
  return (
    <nav>
      <StyledNavItems>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            href={item.href}
            label={item.label}
            subLabel={item.subLabel}
          />
        ))}
      </StyledNavItems>
    </nav>
  );
};

const StyledNavItems = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  ${media.lg`
    display: none;
  `}
`;

export default Nav;
