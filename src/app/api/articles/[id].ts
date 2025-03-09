// import { NextApiRequest, NextApiResponse } from "next";
// import { connectDB } from "../../../utils/db"; // Adjust the path if needed
// import { ObjectId } from "mongodb"; // Required for MongoDB ID manipulation

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { method } = req;
//   const { id } = req.query;

//   console.log(`Method: ${method}, Article ID: ${id}`); // Log for debugging

//   try {
//     const { db } = await connectDB();

//     switch (method) {
//       case "GET":
//         // Ensure the ID is a valid ObjectId
//         if (!ObjectId.isValid(id as string)) {
//           console.log(`Invalid ObjectId: ${id}`);
//           return res.status(400).json({ message: "Invalid article ID" });
//         }

//         // Fetch the article by ID from MongoDB
//         const article = await db.collection("articles").findOne({ _id: new ObjectId(id as string) });

//         if (!article) {
//           console.log(`Article not found for ID: ${id}`);
//           return res.status(404).json({ message: "Article not found" });
//         }

//         return res.status(200).json(article);

//       // Handle other methods (PUT, DELETE) if necessary
//       default:
//         return res.status(405).json({ message: `Method ${method} Not Allowed` });
//     }
//   } catch (error) {
//     console.error("Error fetching article:", error); // Log error details
//     return res.status(500).json({ message: "Internal server error", error: error});
//   }
// }
