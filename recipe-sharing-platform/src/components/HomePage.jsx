// src/pages/HomePage.jsx
import AddRecipeForm from "../components/AddRecipeForm";
import { useState } from "react";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div className="p-6">
      <AddRecipeForm onAddRecipe={handleAddRecipe} />

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recipes</h3>
        <ul className="space-y-2">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="p-4 border rounded-lg">
              <h4 className="font-bold">{recipe.title}</h4>
              <p className="text-sm text-gray-600">
                Ingredients: {recipe.ingredients.join(", ")}
              </p>
              <p className="text-sm mt-1">{recipe.steps}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
