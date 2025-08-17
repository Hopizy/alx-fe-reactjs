import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ recipes }) => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
          <p className="text-gray-600">{recipe.description}</p>

          {/* Use Link to navigate to RecipeDetail */}
          <Link
            to={`/recipe/${recipe.id}`}
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
