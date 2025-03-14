import { fetchRecipes } from '@/app/Lib/fetchRecipes'; // Utility function to fetch recipes
import RecipeCard from '@/components/RecipeCard';
import ScrollButton from '@/components/ScrollButton';

export default function RecipesPage() {
  const recipes = fetchRecipes(); // Fetch the recipes data
  return (
    <div className="container mx-auto p-8 mt-12">
      <h1 className="text-3xl font-bold mb-4">Heart-Healthy Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <ScrollButton />
    </div>
  );
}
