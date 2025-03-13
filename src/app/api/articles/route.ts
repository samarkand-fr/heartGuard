import {  NextResponse } from "next/server";
import { connectDB } from "@/utils/db";
import Article from "@/migration/models/Article";

// Connect to the database (ensure it happens outside the function for reuse)
connectDB();

export async function GET() {
  try {
    console.log("🔍 Connecting to DB...");
    await connectDB();

    console.log("📦 Fetching articles...");
    const articles = await Article.find();

    console.log("✅ Articles retrieved:", articles.length);
    return NextResponse.json(articles);
  } catch (error) {
    console.error("❌ API error:", error);
    return NextResponse.json({ error: "Failed to fetch articles" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const { title, summary, content, imageUrl } = await req.json();

  if (!title || !summary || !content || !imageUrl) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }

  try {
    await connectDB(); // Ensure DB connection is established

    // Create a new article
    const newArticle = new Article({ title, summary, content, imageUrl });
    await newArticle.save();

    return NextResponse.json(newArticle, { status: 201 });
  } catch (error) {
    console.error("Error creating article:", error);
    return NextResponse.json({ message: "Failed to create article" }, { status: 500 });
  }
}
