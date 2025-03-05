import mongoose from "mongoose";
import dotenv from "dotenv";
import Article from "../migration/models/Article"; // Adjust path if needed
import {connectDB} from "../utils/db"; // Adjust path if needed

dotenv.config(); // Load environment variables

const addSampleArticle = async () => {
  await connectDB(); // Connect to MongoDB

  try {
    const article = new Article({
      title: "Test Article",
      summary:"test summary",
      content: "This is a test article content.",
      imageUrl: "https://res.cloudinary.com/your-cloud-name/image/upload/sample.jpg",
    });

    await article.save();
    console.log("✅ Test article inserted successfully!");
  } catch (error) {
    console.error("❌ Error inserting sample article:", error);
  } finally {
    mongoose.connection.close();
  }
  
};

addSampleArticle();
