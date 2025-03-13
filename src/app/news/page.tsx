
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollButton from "@/components/ScrollButton";
import { fetchHealthNews } from "../Lib/api";

interface NewsArticle {
  title: string;
  url: string;
  description: string;
  image?: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsArticle[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getNews() {
      try {
        setLoading(true);
        setError(""); // Reset error message
        const data = await fetchHealthNews();
        setNews(data.data || []);
        setFilteredNews(data.data || []);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Failed to load health news. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    getNews();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = news.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredNews(filtered);
    } else {
      setFilteredNews(news);
    }
  }, [searchQuery, news]);

  const fallbackImage = "/health-news.jpeg"; // Replace with the actual path to your default image

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-12 pt-12 text-center">
        Latest Health News
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search news..."
          className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Error Message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Loading State */}
      {loading && (
        <p className="text-center text-gray-500">Loading news articles...</p>
      )}

      {/* News Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.length > 0 ? (
            filteredNews.map((article) => (
              <div
                key={article.title}
                className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl hover:bg-gradient-to-b from-blue-50 to-white"
              >
                {/* Article Image */}
                <Image
                  src={article.image || fallbackImage}
                  alt={article.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />

                {/* Article Title */}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-700 hover:text-blue-900 transition duration-300"
                >
                  <h2 className="text-2xl font-semibold leading-tight mb-3">
                    {article.title}
                  </h2>
                </a>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-sm md:text-base line-clamp-3">
                  {article.description}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No news articles found.</p>
          )}
        </div>
      )}

      <div className="mt-12 text-center">
        <ScrollButton />
      </div>
    </div>
  );
}
