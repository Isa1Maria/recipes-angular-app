import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe("A Test Recipe", "This is simple a test", "https://live.staticflickr.com/1248/4726258937_ef279d5915_b.jpg")
];

  constructor() { }

  ngOnInit(): void {
  }

}
