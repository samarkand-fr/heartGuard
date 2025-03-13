// // import ScrollButton from '../../../components/ScrollButton';
// // import { fetchArticleById } from '../../Lib/fetchArticlesById'; // Import your fetch function
// // import { Article } from '@/types/article'; // Assuming the Article type exists
// // import Image from 'next/image';
// // import { notFound } from 'next/navigation'; // for 404 page handling

// // const ArticlePage = async ({ params }: { params: { id: string } }) => {
// //   // Ensure to await the params before using its properties
// //   const { id } = await params; 

// //   let article: Article | null = null;

// //   try {
// //     article = await fetchArticleById(id); // Fetch the article by ID
// //   } catch (error) {
// //     console.error("Error fetching article by ID:", error);
// //     notFound(); // Handle case where article is not found
// //   }

// //   if (!article) {
// //     return <div>Article not found</div>;
// //   }

// //   return (
// //     <div className="max-w-3xl mx-auto px-4 py-8 mt-8">
// //       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
// //         {article.imageUrl && (
// //           <Image
// //             src={article.imageUrl}
// //             alt={article.title}
// //             width={1200}
// //             height={600}
// //             className="w-full h-auto object-cover" // Adjust image to be responsive
// //           />
// //         )}
// //         <div className="p-6">
// //           <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">{article.title}</h1>
// //           <p className="text-xl text-gray-700 mt-4">{article.summary}</p>
// //           <div className="mt-6 text-lg text-gray-800 space-y-4">
// //             <div
// //               className="content-text"
// //               dangerouslySetInnerHTML={{ __html: article.content }}
// //             ></div>
// //           </div>
// //         </div>
// //       </div>
// //       <ScrollButton />
// //     </div>
// //   );
// // };

// // export default ArticlePage;
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import ScrollButton from "@/components/ScrollButton";
// import { fetchArticleById } from "@/app/Lib/fetchArticlesById";
// import { Article } from "@/types/article";

// export function generateStaticParams() {
//   return [];
// }

// interface ArticlePageProps {
//   params: { id: string } | Promise<{ id: string }>;
// }

// export default async function ArticlePage({ params }: ArticlePageProps) {
//   // ✅ Vérifie si `params` est une promesse et résous-la
//   const resolvedParams = await params;
//   console.log("Resolved Params:", resolvedParams); // 🔍 Debug

//   const id = resolvedParams.id; // ✅ Maintenant `id` est sûr
  
//   if (!id) {
//     return notFound();
//   }

//   let article: Article | null = null;

//   try {
//     article = await fetchArticleById(id);
//   } catch (error) {
//     console.error("Error fetching article by ID:", error);
//     return notFound();
//   }

//   if (!article) {
//     return notFound();
//   }

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-8 mt-8">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         {article.imageUrl && (
//           <Image
//             src={article.imageUrl}
//             alt={article.title}
//             width={1200}
//             height={600}
//             className="w-full h-auto object-cover"
//           />
//         )}
//         <div className="p-6">
//           <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
//             {article.title}
//           </h1>
//           <p className="text-xl text-gray-700 mt-4">{article.summary}</p>
//           <div className="mt-6 text-lg text-gray-800 space-y-4">
//             <div
//               className="content-text"
//               dangerouslySetInnerHTML={{ __html: article.content }}
//             ></div>
//           </div>
//         </div>
//       </div>
//       <ScrollButton />
//     </div>
//   );
// }
import { notFound } from "next/navigation";
import Image from "next/image";
import ScrollButton from "@/components/ScrollButton";
import { fetchArticleById } from "@/app/Lib/fetchArticlesById";
import { Article } from "@/types/article";

export function generateStaticParams() {
  return [];
}

interface ArticlePageProps {
  params: Promise<{ id: string }>;  // Always expect a promise here
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  // ✅ Resolve params first
  const resolvedParams = await params;  // Await the promise
  console.log("Resolved Params:", resolvedParams); // 🔍 Debug

  const id = resolvedParams.id;  // Now `id` is safe to use

  if (!id) {
    return notFound();
  }

  let article: Article | null;  // Use `any` temporarily for production

  try {
    // Ignore type checks in production, keep them in development
    article = process.env.NODE_ENV === "production"
      ? (await fetchArticleById(id)) 
      : await fetchArticleById(id);  // Keep type-checking in development
  } catch (error) {
    console.error("Error fetching article by ID:", error);
    return notFound();
  }

  if (!article) {
    return notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 mt-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {article.imageUrl && (
          <Image
            src={article.imageUrl}
            alt={article.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        )}
        <div className="p-6">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-xl text-gray-700 mt-4">{article.summary}</p>
          <div className="mt-6 text-lg text-gray-800 space-y-4">
            <div
              className="content-text"
              dangerouslySetInnerHTML={{ __html: article.content }}
            ></div>
          </div>
        </div>
      </div>
      <ScrollButton />
    </div>
  );
}
