import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() recipe: Recipe

  constructor(private recipeBookService: RecipeBookService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList(){
    this.recipeBookService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

}
