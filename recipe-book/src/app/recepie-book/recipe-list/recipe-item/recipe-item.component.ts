import { Component, Input, OnInit, } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeBookService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  
@Input() recipe: Recipe;

  constructor(private recipeBookServeice: RecipeBookService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recipeBookServeice.recipeSelectd.emit(this.recipe);
  }

}
