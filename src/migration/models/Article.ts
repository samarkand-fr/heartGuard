import mongoose, { Schema, Document } from 'mongoose';

export interface IArticle extends Document {
  _id: mongoose.Types.ObjectId; // Explicitly add _id if you prefer
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
}

const articleSchema = new Schema<IArticle>({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: true },  // Ensure imageUrl is set
}, { timestamps: true });


const Article = mongoose.models.Article || mongoose.model<IArticle>('Article', articleSchema);

export default Article;
