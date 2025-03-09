import { NextResponse } from "next/server";
import { connectDB } from "@/utils/db";
import Article from "@/migration/models/Article"; // Vérifie le chemin

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB(); // Déplacer la connexion ici
    const { id } = params;
    const article = await Article.findById(id);

    if (!article) {
      return NextResponse.json({ message: "Article not found" }, { status: 404 });
    }

    return NextResponse.json(article);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ message: "Error fetching article" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB(); // Déplacer la connexion ici
    const { id } = params;
    const data = await req.json();

    const updatedArticle = await Article.findByIdAndUpdate(id, data, { new: true });

    if (!updatedArticle) {
      return NextResponse.json({ message: "Article not found" }, { status: 404 });
    }

    return NextResponse.json(updatedArticle);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ message: "Error updating article" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB(); // Déplacer la connexion ici
    const { id } = params;

    const deletedArticle = await Article.findByIdAndDelete(id);

    if (!deletedArticle) {
      return NextResponse.json({ message: "Article not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Article deleted successfully" });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ message: "Error deleting article" }, { status: 500 });
  }
}
