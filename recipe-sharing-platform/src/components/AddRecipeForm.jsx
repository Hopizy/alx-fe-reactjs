import { useState } from "react";

export default function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Recipe title is required.";

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split(",").map(i => i.trim()).filter(Boolean).length < 2) {
      newErrors.ingredients = "Please provide at least two ingredients (comma-separated).";
    }

    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      ingredients: ingredients
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      steps: steps.trim(),
    };

    onAddRecipe?.(newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto max-w-lg md:max-w-3xl p-4 md:p-8 bg-white rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
        Add New Recipe
      </h2>

      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
        {/* Title (full width) */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 md:p-3.5 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="e.g., Spaghetti Bolognese"
            aria-invalid={!!errors.title}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients (left on md+) */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 md:p-3.5 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="Enter ingredients separated by commas"
            rows={5}
            aria-invalid={!!errors.ingredients}
          />
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            Example: tomatoes, onions, garlic, olive oil
          </p>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps (right on md+) */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-3 md:p-3.5 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            placeholder="Describe the cooking steps"
            rows={5}
            aria-invalid={!!errors.steps}
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit button (full width on mobile, right-aligned on md+) */}
        <div className="md:col-span-2 flex flex-col md:flex-row md:justify-end">
          <button
            type="submit"
            className="w-full md:w-auto bg-green-500 text-white py-3 px-5 rounded-xl hover:bg-green-600 transition-colors"
          >
            Add Recipe
          </button>
        </div>
      </div>
    </form>
  );
}
