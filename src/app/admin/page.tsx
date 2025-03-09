
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Article {
  _id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
}

const AdminArticlesPage = () => {
  const [articles, setArticles] = useState<Article[]>([]); // Use the Article type for state
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch("/api/articles");
      const data = await res.json();
      setArticles(data);
      setLoading(false);
    }
    fetchArticles();
  }, []);

  const handleEdit = (id: string) => {
    router.push(`/admin/articles/${id}/edit`);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this article?")) {
      const res = await fetch(`/api/articles/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setArticles(articles.filter((article) => article._id !== id));
      } else {
        alert("Failed to delete article");
      }
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Articles</h1>
      <button
        onClick={() => router.push("/admin/articles/create")}
        className="bg-blue-500 text-white p-2 mb-4 rounded"
      >
        Create New Article
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-4">
          {articles.map((article) => (
            <li key={article._id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-600">{article.summary}</p>
              <div className="mt-2">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                  onClick={() => handleEdit(article._id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                  onClick={() => handleDelete(article._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminArticlesPage;
