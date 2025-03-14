import recipesData from "@/data/recipes.json";
import { Recipe } from "@/types/recipe"; 

export const fetchRecipes = (): Recipe[] => {
  return recipesData as Recipe[];
};
