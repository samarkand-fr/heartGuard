import React, { JSX } from "react";
import { Dumbbell, Leaf, Flame, Candy, Droplet, HeartPulse } from "lucide-react";

interface TipCardProps {
  tip: {
    id: string;
    tip: string;
    icon: string;
  };
}

// Mapping des icônes avec des noms valides
const iconMap: { [key: string]: JSX.Element } = {
  Dumbbell: <Dumbbell size={32} className="text-blue-500" />, // Exercice
  Leaf: <Leaf size={32} className="text-green-500" />, // Aliments naturels
  Flame: <Flame size={32} className="text-yellow-500" />, // Huiles saines
  Candy: <Candy size={32} className="text-red-500" />, // Aliments sucrés
  Droplet: <Droplet size={32} className="text-blue-300" />, // Hydratation
  HeartPulse: <HeartPulse size={32} className="text-red-400" /> // Santé du cœur
};

const TipCard: React.FC<TipCardProps> = ({ tip }) => {
  return (
    <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
      <div>{iconMap[tip.icon] || <HeartPulse size={32} className="text-gray-400" />}</div>
      <p className="text-gray-800 text-lg">{tip.tip}</p>
    </div>
  );
};

export default TipCard;

