import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
    selector: 'rb-recipe-list',
    templateUrl: './htm-views/recipes/recipe-list.component.html',
    styles: []
})
export class RecipeListComponent implements OnInit {
    // we are setting the recipe here and then making making it available to the recipe variable in recipe-item-component 

    recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Very tasty', 'https://s-media-cache-ak0.pinimg.com/736x/9a/c3/4b/9ac34b2ce88abcb806a1cf5722a5490e.jpg', []),
        new Recipe('Summer Salad', 'Okayish', 'http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/peruvian-toasted-sweetcorn-avocado-quinoa-salad.jpg?itok=xZCJz9qU', [])
    ];
    @Output() recipeSelected = new EventEmitter<Recipe>();

    constructor() { }

    ngOnInit() {
    }

    onSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }
}