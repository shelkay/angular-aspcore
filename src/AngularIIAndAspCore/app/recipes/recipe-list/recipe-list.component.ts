import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'rb-recipe-list',
    templateUrl: './htm-views/recipes/recipe-list.component.html',
    styles: []
})
export class RecipeListComponent implements OnInit {
    // we are setting the recipe here and then making making it available to the recipe variable in recipe-item-component 

    recipes: Recipe[] = [];
    //@Output() recipeSelected = new EventEmitter<Recipe>();

    constructor(private recipeService: RecipeService ) { }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }

    onSelected(recipe: Recipe) {
       // this.recipeSelected.emit(recipe);
    }
}