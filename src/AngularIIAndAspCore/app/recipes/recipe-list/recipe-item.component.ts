import { Component,  Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
    selector: 'rb-recipe-item',
    templateUrl: './htm-views/recipes/recipe-item.component.html',
    styles: []
})
export class RecipeItemComponent   {
    // recipe will be set by outside component recipe-list
    @Input() recipe: Recipe;
    @Input() recipeId: number;
}