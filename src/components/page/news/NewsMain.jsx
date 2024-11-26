import { Link } from "react-router-dom";

const NewsMain = ({ newsItems }) => {
  // 抜粋を作成する関数
  const extractExcerpt = (html, length = 110) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    return text.length > length ? `${text.substring(0, length)}...` : text;
  };

  return (
    <main>
      <ul>
        {newsItems.map((newsItem) => {
          return (
            <li key={newsItem._id}>
              {console.log(JSON.stringify(newsItem))}
              <Link to={`/news/${newsItem._id}`}>
                {newsItem.coverImage && (
                  <div>
                    <img
                      src={newsItem.coverImage.src}
                      width={newsItem.coverImage.width}
                      height={newsItem.coverImage.height}
                      alt={newsItem.coverImage.altText || ""}
                    />
                  </div>
                )}
                <h2>{newsItem.title}</h2>
                <div>{extractExcerpt(newsItem.body, 110)}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default NewsMain;
