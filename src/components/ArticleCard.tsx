import { Article } from '../types/article';
import Image from 'next/image';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
    {/* Use article.imageUrl instead of article.image */}
    {article.imageUrl && (article.imageUrl.startsWith("http") || article.imageUrl.startsWith("/")) ? (
  <Image
    src={article.imageUrl}
    alt={article.title}
    width={400}
    height={250}
  />
) : (
  <p>No image available</p>
)}

    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900">{article.title}</h2>
      <p className="text-gray-600 mt-2 line-clamp-3">{article.summary}</p>
      <a
        href={`/articles/${article.id}`}
        className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium transition duration-300"
      >
        Read More →
      </a>
    </div>
  </div>
);

export default ArticleCard;
