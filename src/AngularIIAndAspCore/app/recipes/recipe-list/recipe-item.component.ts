import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
    selector: 'rb-recipe-item',
    templateUrl: './htm-views/recipes/recipe-item.component.html',
    styles: []
})
export class RecipeItemComponent implements OnInit {
    // recipe will be set by outside component recipe-list
    @Input() recipe: Recipe;  
    recipeId: number;

    constructor() { }

    ngOnInit() { }


}