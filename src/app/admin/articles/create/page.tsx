"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateArticlePage = () => {
  const [article, setArticle] = useState({
    title: "",
    summary: "",
    content: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    });

    setLoading(false);

    if (response.ok) {
      router.push("/admin"); // Navigate to the admin page after creation
    } else {
      alert("Failed to create article");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-lg mt-16">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create New Article</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter article title"
            value={article.title}
            onChange={(e) => setArticle({ ...article, title: e.target.value })}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="summary" className="block text-sm font-medium text-gray-700">Summary</label>
          <input
            type="text"
            id="summary"
            placeholder="Enter article summary"
            value={article.summary}
            onChange={(e) => setArticle({ ...article, summary: e.target.value })}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            id="content"
            placeholder="Enter article content"
            value={article.content}
            onChange={(e) => setArticle({ ...article, content: e.target.value })}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            placeholder="Enter image URL"
            value={article.imageUrl}
            onChange={(e) => setArticle({ ...article, imageUrl: e.target.value })}
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
            {loading ? "Creating..." : "Create Article"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateArticlePage;
