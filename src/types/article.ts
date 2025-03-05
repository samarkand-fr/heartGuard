export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;  // Ensure this matches the field in your database schema
}
