import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {GlobalStyled} from "../constants/GlobalStyled"

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyled>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />
          <Route exact path="/feed" element={<RecipesListPage />} />
          <Route exact path="/recipe" element={<RecipeDetailPage />} />
          <Route exact path="/add-recipe" element={<AddRecipesPage />} />
          <Route element={<ErrorPage />} />
        </Routes>
        <Footer />
      </GlobalStyled>
    </BrowserRouter>
  );
}

export default Router;
