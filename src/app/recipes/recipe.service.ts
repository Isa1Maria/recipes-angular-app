import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model';


@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();


    //private recipes: Recipe[] = [
    //  new Recipe('Schnitzel', 
    //    'A super-tasty Schnitzel', 
    //    "https://image.freepik.com/free-photo/wiener-schnitzel-with-potato-balls-lemon-sauce-chicken-schnitzel-breading_147620-1652.jpg",
    //    [
    //        new Ingredient('Meat', 1),
    //        new Ingredient('French Fries', 20)
    //    ])
    //  ,new Recipe('Big Burguer', 
    //  "What else?", 
    //  "https://live.staticflickr.com/8632/16221913884_3f6ccc89df_b.jpg",
    //  [
    //    new Ingredient('Buns', 2),
    //    new Ingredient('Meat', 1)
    //  ])
    //  ];
    private recipes: Recipe[] = [];

      constructor(private slService: ShoppingListService) {}

      setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
      
getRecipes() {
    return this.recipes.slice();
}

getRecipe(index: number) {
  return this.recipes[index];
}

addIngredientsToShoppingList (ingredients: Ingredient[]) {
this.slService.addIngredients(ingredients);
}

addRecipe(recipe: Recipe) {
 this.recipes.push(recipe);
 this.recipesChanged.next(this.recipes.slice());
}

updateRecipe(index: number, newRecipe: Recipe) {
  this.recipes[index] = newRecipe;
  this.recipesChanged.next(this.recipes.slice());
}

deleteRecipe(index: number) {
  this.recipes.splice(index, 1);
  this.recipesChanged.next(this.recipes.slice());
}
}