import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledSibeItem from "/src/assets/styles/styledComponents/StyledSidebarItem";

const Categories = ({ newsCategories }) => {
  return (
    <StyledSibeItem>
      <h2>カテゴリー</h2>
      <StyledCategories>
        {newsCategories.map((newsCategory) => (
          <li key={newsCategory._id}>
            <Link to={`/news/category/${newsCategory.slug}`}>
              {" "}
              <div>{newsCategory.name}</div>
            </Link>
          </li>
        ))}
      </StyledCategories>
    </StyledSibeItem>
  );
};

const StyledCategories = styled.ul`
  li {
    a {
      border-bottom: 1px solid #aaa;
      display: block;
      padding-bottom: 0.5em;
      transition: color 0.3s;

      &:hover {
        color: #aaa;
      }
    }

    &:not(:last-of-type) {
      a {
        margin-bottom: 0.5em;
      }
    }
  }
`;

export default Categories;
