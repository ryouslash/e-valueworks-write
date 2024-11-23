import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledSibeItem } from "/src/assets/styles/StyledComponents.jsx";

const RecentPosts = ({ latestNews }) => {
  return (
    <StyledSibeItem>
      <h2>最新の投稿</h2>
      <StyledRecentPosts>
        {latestNews.map((newsItem) => (
          <li key={newsItem._id}>
            <Link to={`/news/${newsItem._id}`}>
              {" "}
              <div>
                {newsItem.coverImage && (
                  <img
                    src={newsItem.coverImage.src}
                    width={newsItem.coverImage.width}
                    height={newsItem.coverImage.height}
                    alt={newsItem.coverImage.altText || "お知らせサムネイル"}
                  />
                )}
              </div>
              <h3>{newsItem.title}</h3>
            </Link>
          </li>
        ))}
      </StyledRecentPosts>
    </StyledSibeItem>
  );
};

const StyledRecentPosts = styled.ul`
  li {
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }
    }

    div {
      aspect-ratio: 3 / 2;
      box-shadow: 0 0 4px #a9a9a9;
      overflow: hidden;

      img {
        height: 100%;
        transition: transform 0.3s;
      }
    }

    h3 {
      font-weight: 400;
      margin-top: 0.3em;
    }
  }
`;

export default RecentPosts;
