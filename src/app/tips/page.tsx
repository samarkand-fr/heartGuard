import { fetchTips } from "@/app/Lib/fetchTips";
import TipCard from "@/components/TipCard";
import ScrollButton from "@/components/ScrollButton";

export default function TipsPage() {
  const tips = fetchTips(); // Récupération des données JSON

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text mb-12 pt-12 transition-all duration-500 transform hover:scale-105 hover:text-blue-700">
        Cholesterol Control Tips
      </h1>

      {/* Grid des conseils */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {tips.map((tip) => (
          <TipCard key={tip.id} tip={tip} />
        ))}
      </div>

      <ScrollButton />
    </div>
  );
}
