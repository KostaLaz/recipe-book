import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
 
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const newName = this.nameInputRef.nativeElement.value;
    const newAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(newName, newAmount);
    this.shoppingListService.addIngredient(newIngredient);
  
  }
}
