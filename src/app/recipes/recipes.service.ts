import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "1",
      title: "Schnitzel",
      imageUrl:
        "https://assets.bonappetit.com/photos/57ae1afd53e63daf11a4e26f/16:9/w_1000,c_limit/chicken-schnitzel.jpg",
      ingredients: ["French fries", "Tomatoes"],
    },
    {
      id: "1",
      title: "Spaghetti",
      imageUrl:
        "https://assets.bonappetit.com/photos/57ae1afd53e63daf11a4e26f/16:9/w_1000,c_limit/chicken-schnitzel.jpg",
      ingredients: ["Spaghetti", "Tomatoes"],
    },
  ];

  constructor() {}
  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return { ...this.recipes.find((recipe) => recipe.id === recipeId) };
  }
}
