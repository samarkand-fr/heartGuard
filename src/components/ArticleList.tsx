import Link from "next/link";

interface Article {
  _id: string;
  title: string;
  summary: string;
}

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div>
      <h1>Articles List</h1>
      {articles.map((article) => (
        <div key={article._id} className="article-item">
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
          {/* Link to the edit page for each article */}
          <Link href={`/articles/${article._id}`}>
            <button>Edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
