export const goToHome = (history) => {
  history.push("/");
};

export const goToLogin = (history) => {
  history.push("/login");
};

export const goToSignUp = (history) => {
  history.push("/signup");
};

export const goToFeed = (history) => {
  history.push("/feed");
};

export const goToRecipe = (history, id) => {
  history.push(`/recipe/${id}`);
};

export const goToAddRecipe = (history) => {
  history.push("/add-recipe");
};
