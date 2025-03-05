import Article from '../../models/Article'; // Adjust the path according to your project structure
import { connectDB } from '../../utils/db'; // Assuming you have a db.ts file for MongoDB connection

export const fetchArticles = async () => {
  try {
    await connectDB(); // Ensure the DB connection is established
    const articles = await Article.find(); // Use the imported Article model here
    return articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
