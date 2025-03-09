// export const fetchArticle = async (id: string) => {
//     const response = await fetch(`/api/articles?id=${id}`);
//     const data = await response.json();
//     return data;
//   };
import Article from "../../migration/models/Article";
import { connectDB } from "../../utils/db";

export const fetchArticles = async () => {
  try {
    console.log("🔍 Fetching articles from DB...");
    await connectDB();

    const articles = await Article.find();
    console.log("✅ Found", articles.length, "articles.");

    return JSON.parse(JSON.stringify(articles)); // Convert to valid JSON
  } catch (error) {
    console.error("❌ Error fetching articles:", error);
    return []; // Return an empty array instead of throwing an error
  }
};
