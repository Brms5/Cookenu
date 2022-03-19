import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/feed" element={<RecipesListPage />} />
        <Route exact path="/recipe" element={<RecipeDetailPage />} />
        <Route exact path="/add" element={<AddRecipesPage />} />
        <Route element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
