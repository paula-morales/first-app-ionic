import { Component, OnInit, OnDestroy } from "@angular/core";
import { RecipesService } from "./recipes.service";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipes();
  }
  ionViewDidEnter() {
    console.log("ion did enter");
  }

  ngOnDestroy() {
    console.log("ng");
  }
}
