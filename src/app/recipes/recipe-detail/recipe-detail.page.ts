import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipesService } from "../recipes.service";
import { Recipe } from "../recipe.model";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"],
})
export class RecipeDetailPage implements OnInit {
  recipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("recipeId")) {
        //redirect
        return;
      }
      const recipeId = paramMap.get("recipeId");
      this.recipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe() {
    this.alertController
      .create({
        header: "are you sure?",
        message: "do you want to delete it?",
        buttons: [
          {
            text: "cancel",
            role: "cancel",
          },
          {
            text: "delete",
            handler: () => {
              this.recipesService.deleteRecipe(this.recipe.id);
              this.router.navigate(["/recipes"]);
            },
          },
        ],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }
}
