
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ArticleFormProps {
  articleId?: string; // Optional: Article ID to edit an existing article
}

const ArticleForm: React.FC<ArticleFormProps> = ({ articleId }) => {
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Fetch article data for editing if articleId is provided
  useEffect(() => {
    if (articleId) {
      // Fetch article by ID
      fetch(`/api/articles?id=${articleId}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setSummary(data.summary);
          setContent(data.content);
          setImageUrl(data.imageUrl);
        })
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .catch((err) => setError("Failed to fetch article for editing"));
    }
  }, [articleId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const articleData = { title, summary, content, imageUrl };
    
    try {
      let response;
      if (articleId) {
        // If articleId exists, we're editing an article
        response = await fetch("/api/articles", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: articleId, ...articleData }),
        });
      } else {
        // If articleId doesn't exist, we're creating a new article
        response = await fetch("/api/articles", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(articleData),
        });
      }

      const data = await response.json();

      if (response.ok) {
        // Redirect or show success message
        alert(articleId ? "Article updated successfully!" : "Article created successfully!");
        router.push("/articles"); // Redirect to articles list page (modify as per your route)
      } else {
        setError(data.error || "Something went wrong");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Failed to submit article");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 border border-gray-300 shadow-md rounded-lg">
      <h1 className="text-3xl mb-4 text-center">
        {articleId ? "Edit Article" : "Create Article"}
      </h1>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="summary" className="block text-lg">Summary</label>
          <textarea
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            rows={4}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-lg">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            rows={6}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="imageUrl" className="block text-lg">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
            required
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? (articleId ? "Updating..." : "Creating...") : articleId ? "Update Article" : "Create Article"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
