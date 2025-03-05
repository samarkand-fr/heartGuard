import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import Article from "../../migration/models/Article";
import { connectDB } from "../../utils/db"; 


dotenv.config(); // Charger les variables d'environnement

// Configure Cloudinary avec les informations d'authentification
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Charger les articles depuis le fichier JSON
const articles = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/articles.json"), "utf-8"));

// Fonction pour uploader les images vers Cloudinary
const uploadImageToCloudinary = async (imagePath: string): Promise<string> => {
  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: "articles", // Optionnel : définir un dossier Cloudinary
    });
    return result.secure_url; // Retourne l'URL sécurisée de l'image
  } catch (error) {
    console.error("❌ Erreur lors de l'upload de l'image:", error);
    throw error;
  }
};

// Fonction principale pour insérer les articles et mettre à jour les URLs d'images
const uploadArticles = async () => {
  try {
    await connectDB(); // Connexion à MongoDB

    // Supprime les anciens articles pour éviter les doublons
    await Article.deleteMany({});
    console.log("🗑️ Anciennes données supprimées");

    // Parcours des articles pour uploader les images et insérer dans la DB
    const insertedArticles = [];
    for (const article of articles) {
      const imagePath = path.join(__dirname, "../../public", article.image); // Chemin complet de l'image

      if (fs.existsSync(imagePath)) {
        console.log(`Uploading image: ${article.image}`);
        const cloudinaryUrl = await uploadImageToCloudinary(imagePath); // Upload de l'image vers Cloudinary

        // Créer l'objet article avec l'URL de l'image Cloudinary
        const articleWithImage = {
          title: article.title,
          summary: article.summary,
          content: article.content,
          imageUrl: cloudinaryUrl, // Remplace l'URL locale par celle de Cloudinary
        };

        // Insérer l'article avec l'URL de l'image Cloudinary
        const insertedArticle = await Article.create(articleWithImage);
        insertedArticles.push(insertedArticle);
        console.log(`Article mis à jour avec la nouvelle image URL: ${insertedArticle._id} - ${insertedArticle.imageUrl}`);
      } else {
        console.log(`❌ Image introuvable pour l'article ${article.title}`);
      }
    }

    console.log("✅ Articles insérés avec images Cloudinary:", insertedArticles);
    process.exit(); // Sortie après l'exécution
  } catch (error) {
    console.error("❌ Erreur lors de l'insertion des articles:", error);
    process.exit(1);
  }
};

// Exécuter le script
uploadArticles();
