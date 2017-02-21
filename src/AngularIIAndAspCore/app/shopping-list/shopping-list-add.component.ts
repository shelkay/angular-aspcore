﻿import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient";
import { ShoppingListService } from "./shopping-list.service";

@Component({
    selector: 'rb-shopping-list-add',
    templateUrl: './htm-views/shopping-list/shopping-list-add.component.html',
    styles: []
})
export class ShoppingListAddComponent implements OnChanges {
    @Input() item: Ingredient;
    @Output() cleared = new EventEmitter();
    isAdd = true;


    constructor(private sls: ShoppingListService) { }

    ngOnChanges(changes) {
        if (changes.item.currentValue === null) {
            this.isAdd = true;
            this.item = { name: null, amount: null };
        } else {
            this.isAdd = false;
        }
    }

    // Saving functionality...
    onSubmit(ingredient: Ingredient) {
        const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
        if (!this.isAdd) {
            // Edit...
            this.sls.editItem(this.item, newIngredient);
            this.onClear();
        } else {
            // Add
            this.item = newIngredient;
            this.sls.addItem(this.item);
        }
    }

    onDelete() {
        this.sls.deleteItem(this.item);
    }

    onClear() {
        this.isAdd = true;
        this.cleared.emit(null);
    }

}