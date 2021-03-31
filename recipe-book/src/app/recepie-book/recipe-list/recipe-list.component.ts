import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('a Test recipe', 'TestDecription', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563'),
    new Recipe('TestRecipe', 'TestDescription', 'https://static01.nyt.com/images/2020/01/29/dining/27Romanrex/merlin_167079174_ecc032e7-071b-44ab-8852-0d5025d0e90d-articleLarge.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelcted(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
