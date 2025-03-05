
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();
// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";
// import path from "path";
// import Article from "../models/Article"; // Adjust the path if needed

// // Set up Cloudinary credentials
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Connect to MongoDB
// const connectToDatabase = async () => {
//   if (!process.env.MONGO_URI) {
//     throw new Error("MONGO_URI is not defined in environment variables.");
//   }

//   if (mongoose.connection.readyState >= 1) {
//     console.log("⚡ Already connected to MongoDB");
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ Successfully connected to MongoDB Atlas");
//   } catch (error) {
//     console.error("❌ Error connecting to MongoDB Atlas", error);
//     process.exit(1);
//   }
// };

// // Upload image to Cloudinary
// const uploadImageToCloudinary = async (imagePath: string) => {
//   try {
//     const result = await cloudinary.uploader.upload(imagePath, {
//       folder: "your_folder_name", // specify your Cloudinary folder
//     });
//     return result.secure_url;
//   } catch (error) {
//     console.error("Error uploading image:", error);
//     throw error;
//   }
// };

// // Update article images in MongoDB
// const updateArticleImages = async () => {
//   await connectToDatabase();
//   const articles = await Article.find();

//   for (const article of articles) {
//     if (article.imageUrl) {
//       const imagePath = path.join(__dirname, "../../public", article.imageUrl); // Corrected path to the public folder

//       if (fs.existsSync(imagePath)) {
//         console.log(`Uploading image: ${article.imageUrl}`);
        
//         try {
//           const cloudinaryUrl = await uploadImageToCloudinary(imagePath);
//           console.log(`Updated Cloudinary URL: ${cloudinaryUrl}`);

//           // Update image URL in database
//           article.imageUrl = cloudinaryUrl;
//           await article.save();
//           console.log(`Article updated with new image URL: ${article._id} - ${article.imageUrl}`);
//         } catch (error) {
//           console.error(`Failed to upload image for article ${article._id}:`, error);
//         }
//       } else {
//         console.log(`Image not found for article ${article._id}`);
//       }
//     }
//   }
// };

// updateArticleImages()
//   .then(() => {
//     console.log("Finished updating images");
//   })
//   .catch((error) => {
//     console.error("Error during image update process:", error);
//   });
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";
import Article from "../migration/models/Article"; // Adjust the path if needed
import { connectDB } from "../utils/db"; // Assuming your MongoDB connection is in /utils/db.ts

dotenv.config(); // Load environment variables

// Set up Cloudinary credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to upload the image to Cloudinary
const uploadImageToCloudinary = async (imagePath: string) => {
  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: "your_folder_name", // Specify a folder on Cloudinary if desired
    });
    return result.secure_url; // The URL of the uploaded image
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

// Main function to update article images in the database
const updateArticleImages = async () => {
  await connectDB();

  const articles = await Article.find();

  for (const article of articles) {
    if (article.imageUrl) {
      // Extraire seulement le nom du fichier sans "/images/"
      const fileName = path.basename(article.imageUrl); // Ex: "article1.jpg"

      const imagePath = path.join(process.cwd(), "public", fileName); // Correcte

      if (fs.existsSync(imagePath)) {
        console.log(`Uploading image: ${fileName}`);

        try {
          const cloudinaryUrl = await uploadImageToCloudinary(imagePath);
          console.log(`Updated Cloudinary URL: ${cloudinaryUrl}`);

          // Mettre à jour l'URL de l'image dans la base de données
          article.imageUrl = cloudinaryUrl;
          await article.save();
          console.log(`Article mis à jour avec la nouvelle image URL: ${article._id} - ${article.imageUrl}`);
        } catch (error) {
          console.error(`Erreur d'upload pour l'article ${article._id}:`, error);
        }
      } else {
        console.log(`Image introuvable pour l'article ${article._id}: ${imagePath}`);
      }
    }
  }
};


updateArticleImages()
  .then(() => {
    console.log("Finished updating images");
  })
  .catch((error) => {
    console.error("Error during image update process:", error);
    
  });
