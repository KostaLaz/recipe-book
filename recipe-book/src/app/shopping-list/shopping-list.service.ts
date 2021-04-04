import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
    ingrediantsChanged = new EventEmitter<Ingredient[]>();
   private ingredients: Ingredient[] = [
        new Ingredient('salt', 10),
        new Ingredient('peper', 20)
      ]; 

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingrediantsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingrediantsChanged.emit(ingredients);
      }
}