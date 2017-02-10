import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';


@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Very tasty', 'https://s-media-cache-ak0.pinimg.com/736x/9a/c3/4b/9ac34b2ce88abcb806a1cf5722a5490e.jpg', [
            new Ingredient('French Fries', 2),
            new Ingredient('Pork Meat', 1)
        ]),
        new Recipe('Summer Salad', 'Okayish', 'http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/peruvian-toasted-sweetcorn-avocado-quinoa-salad.jpg?itok=xZCJz9qU', [])
    ];

    constructor() { }

    getRecipes() {
        return this.recipes;
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    deleteRecipe(recipe: Recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }
}