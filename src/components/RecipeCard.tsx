import Image from 'next/image';
import { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    {/* Recipe Image */}
    <div className="relative w-full h-48">
      <Image
        src={recipe.image} // Assuming `recipe.image` is a valid image URL
        alt={recipe.name}
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
    </div>
    
    {/* Recipe Title */}
    <h2 className="text-xl font-semibold mt-4">{recipe.name}</h2>
    
    {/* Ingredients */}
    <p className="mt-2 text-gray-700">Ingredients: {recipe.ingredients.join(', ')}</p>
  </div>
);

export default RecipeCard;
