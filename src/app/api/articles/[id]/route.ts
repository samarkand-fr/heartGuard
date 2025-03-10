
import { NextResponse } from "next/server";
import { connectDB } from "@/utils/db";
import Article from "@/migration/models/Article"; // Vérifie le chemin


export async function GET(req: Request, context: { params: { id: string } }) {
  try {
    await connectDB();
    const { id } = context.params;
    const article = await Article.findById(id);

    if (!article) {
      return NextResponse.json({ message: "Article not found" }, { status: 404 });
    }

    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching article" , error: String(error)}, { status: 500 });
  }
}

// ✅ PUT: Mettre à jour un article par ID
export async function PUT(req: Request, context: { params: { id: string } }) {
  try {
    await connectDB();
    const { id } = context.params;
    const data = await req.json();

    const updatedArticle = await Article.findByIdAndUpdate(id, data, { new: true });

    if (!updatedArticle) {
      return NextResponse.json({ message: "Article not found" }, { status: 404 });
    }

    return NextResponse.json(updatedArticle);
  } catch (error) {
    return NextResponse.json({ message: "Error updating article", error: String(error) }, { status: 500 });
  }
}

// ✅ DELETE: Supprimer un article par ID
export async function DELETE(req: Request, context: { params: { id: string } }) {
  try {
    await connectDB();
    const { id } = await context.params; 

    const deletedArticle = await Article.findByIdAndDelete(id);
    if (!deletedArticle) {
      return NextResponse.json({ message: "Article not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Article deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting article", error: String(error) }, { status: 500 });
  }
}

