
import mongoose from 'mongoose';
import Article from '@/migration/models/Article';

export const fetchArticleById = async (id: string) => {
  try {
    // Convert the string ID to ObjectId
    const objectId = new mongoose.Types.ObjectId(id);
    
    // Fetch the article by ObjectId
    const article = await Article.findById(objectId);

    if (!article) {
      throw new Error('Article not found');
    }

    return article;
  } catch (error) {
    console.error("Error fetching article by ID:", error);
    throw error; // Propagate the error
  }
};
