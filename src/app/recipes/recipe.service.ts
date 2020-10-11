import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model';


@Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 
        'A super-tasty Schnitzel', 
        "https://image.freepik.com/free-photo/wiener-schnitzel-with-potato-balls-lemon-sauce-chicken-schnitzel-breading_147620-1652.jpg",
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ])
      ,new Recipe('Big Burguer', 
      "What else?", 
      "https://live.staticflickr.com/8632/16221913884_3f6ccc89df_b.jpg",
      [
        new Ingredient('Buns', 2),
        new Ingredient('Mear', 1)
      ])
      ];

      constructor(private slService: ShoppingListService) {}
      
getRecipes() {
    return this.recipes.slice();
}

addIngredientsToShoppingList (ingredients: Ingredient[]) {
this.slService.addIngredients(ingredients);
}

}