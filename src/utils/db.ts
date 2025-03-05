import mongoose from "mongoose";

export const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environment variables.");
  }

  if (mongoose.connection.readyState >= 1) {
    console.log("⚡ Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Successfully connected to MongoDB Atlas");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB Atlas", error);
    process.exit(1);
  }
};
