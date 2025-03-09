"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const EditArticlePage = () => {
  const params = useParams(); // ✅ Récupère les paramètres dynamiques
  const id = params?.id as string; // ✅ Vérifie et caste l'ID en string

  const [article, setArticle] = useState({
    title: "",
    summary: "",
    content: "",
    imageUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!id) return;

    const fetchArticle = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/articles/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch article");
        }
        const data = await response.json();
        setArticle(data); // ✅ Met à jour l'article
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]); // ✅ Relance la récupération si l'ID change

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(`/api/articles/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });

    setLoading(false);

    if (response.ok) {
      router.push("/admin"); // ✅ Redirige vers la page admin
    } else {
      alert("Failed to update article");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg mt-16">
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={article.title}
              onChange={(e) =>
                setArticle({ ...article, title: e.target.value })
              }
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Summary</label>
            <input
              type="text"
              value={article.summary}
              onChange={(e) =>
                setArticle({ ...article, summary: e.target.value })
              }
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              value={article.content}
              onChange={(e) =>
                setArticle({ ...article, content: e.target.value })
              }
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              value={article.imageUrl}
              onChange={(e) =>
                setArticle({ ...article, imageUrl: e.target.value })
              }
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-300"
            >
              {loading ? "Updating..." : "Update Article"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditArticlePage;
