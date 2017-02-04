import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';

@Component({
    selector: 'rb-recipes',
    templateUrl: './htm-views/recipes/recipes.component.html',
    styles: [],
    //providers: [ServiceName] -- can be passed/injected into constructor 
})
export class RecipesComponent implements OnInit {
    selectedRecipe = Recipe;
    constructor() { }

    ngOnInit() { }
}