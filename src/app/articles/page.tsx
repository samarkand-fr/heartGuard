import { fetchArticles } from '../Lib/fetchArticles'; // Utility function to fetch articles
import ArticleCard from '../../components/ArticleCard';
import { Article } from '@/types/article';
import ScrollButton from '@/components/ScrollButton';

export default async function ArticlesPage() {
  let articles: Article[] = [];

  try {
    articles = await fetchArticles(); // Fetch articles data
  } catch (error) {
    console.error("Error fetching articles:", error);
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 mt-10">
      {/* Page Title */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-800 drop-shadow-md">Cholesterol & Heart Health</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Stay informed with the latest research and tips on managing cholesterol levels.
        </p>
      </header>

      {/* Articles Grid */}
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No articles available at the moment.</p>
      )}

      {/* Scroll to Top Button */}
      <ScrollButton />
    </div>
  );
}
