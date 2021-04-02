import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeBookService } from './recipe.service';

@Component({
  selector: 'app-recepie-book',
  templateUrl: './recepie-book.component.html',
  styleUrls: ['./recepie-book.component.css'],
  providers: [RecipeBookService]
})
export class RecepieBookComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeBookServeice: RecipeBookService) { }

  ngOnInit(): void {
    this.recipeBookServeice.recipeSelectd.subscribe(
      (recipe: Recipe) => {this.selectedRecipe = recipe;});
  }

}
