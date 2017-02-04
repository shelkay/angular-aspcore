import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe";

@Component({
    selector: 'rb-recipe-detail',
    templateUrl: './htm-views/recipes/recipe-detail/recipe-detail.component.html', 
})
export class RecipeDetailComponent implements OnInit {
    @Input() selectedRecipe: Recipe;

    constructor() { }

    ngOnInit() {
    }    
}