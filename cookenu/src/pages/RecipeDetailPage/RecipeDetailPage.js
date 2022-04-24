import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

function RecipeDetailPage() {
  useProtectedPage();

  return <div>RecipeDetailPage</div>;
}

export default RecipeDetailPage;
