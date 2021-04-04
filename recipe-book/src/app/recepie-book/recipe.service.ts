import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeBookService{
    recipeSelectd = new EventEmitter<Recipe>()

    recipes: Recipe[] = [
        new Recipe('Shakshuka',
         'Traditional Indian dish',
         'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563',
         [
           new Ingredient('Eggs', 8),
           new Ingredient('Basil', 5),
           new Ingredient('Tomato', 12)
         ]),
        new Recipe('Pesto Spagetti',
         'Beautiful, fresh, Italian pasta',
          'https://static01.nyt.com/images/2020/01/29/dining/27Romanrex/merlin_167079174_ecc032e7-071b-44ab-8852-0d5025d0e90d-articleLarge.jpg',
          [
            new Ingredient('Spagetti', 0.5),
            new Ingredient('Parmezan', 1),
            new Ingredient('Basil', 5)
          ])
      ]

      constructor(private shoppingListService: ShoppingListService){}

      getRecipes(){
        return this.recipes.slice();
}

addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
}

}