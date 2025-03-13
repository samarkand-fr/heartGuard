import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/db";
import Article from "@/migration/models/Article";

// Connect to the database (ensure it happens outside the function for reuse)
connectDB();



export async function GET(req: NextRequest) {
  // Get the dynamic parameter 'id' from the request URL
  const id = req.nextUrl.pathname.split('/')[3];  // The 'id' will be in the 4th position

  try {
    // Connect to the database
    console.log("🔍 Connecting to DB...");
    await connectDB();

    // Fetch the article by ID
    console.log("📦 Fetching article...");
    const article = await Article.findById(id);

    if (!article) {
      return NextResponse.json({ message: "Article not found" }, { status: 404 });
    }

    console.log("✅ Article retrieved:", article);
    return NextResponse.json(article);
  } catch (error) {
    console.error("❌ API error:", error);
    return NextResponse.json({ error: "Failed to fetch article" }, { status: 500 });
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
// ✅ PUT: Mettre à jour un article par ID

export async function PUT(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/')[3];  // Extract 'id' from URL

  try {
    const { title, summary, content, imageUrl } = await req.json();

    if (!title || !summary || !content || !imageUrl) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // Connect to DB
    await connectDB();

    // Update the article in the DB
    const updatedArticle = await Article.findByIdAndUpdate(
      id,
      { title, summary, content, imageUrl },
      { new: true } // Return the updated article
    );

    if (!updatedArticle) {
      return NextResponse.json({ message: "Article not found" }, { status: 404 });
    }

    return NextResponse.json(updatedArticle, { status: 200 });
  } catch (error) {
    console.error("❌ Error updating article:", error);
    return NextResponse.json({ message: "Failed to update article" }, { status: 500 });
  }
}


// ✅ DELETE: Supprimer un article par ID

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/')[3];  // Extract 'id' from URL

  try {
    // Connect to DB
    await connectDB();

    // Delete the article from the DB
    const deletedArticle = await Article.findByIdAndDelete(id);

    if (!deletedArticle) {
      return NextResponse.json({ message: "Article not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Article deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("❌ Error deleting article:", error);
    return NextResponse.json({ message: "Failed to delete article" }, { status: 500 });
  }
}
