"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const recipe_1 = require("./recipe");
const ingredient_1 = require("../shared/ingredient");
let RecipeService = class RecipeService {
    constructor() {
        this.recipes = [
            new recipe_1.Recipe('Schnitzel', 'Very tasty', 'https://s-media-cache-ak0.pinimg.com/736x/9a/c3/4b/9ac34b2ce88abcb806a1cf5722a5490e.jpg', [
                new ingredient_1.Ingredient('French Fries', 2),
                new ingredient_1.Ingredient('Pork Meat', 1)
            ]),
            new recipe_1.Recipe('Summer Salad', 'Okayish', 'http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/peruvian-toasted-sweetcorn-avocado-quinoa-salad.jpg?itok=xZCJz9qU', [])
        ];
    }
    getRecipes() {
        return this.recipes;
    }
    getRecipe(id) {
        return this.recipes[id];
    }
    deleteRecipe(recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }
};
RecipeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], RecipeService);
exports.RecipeService = RecipeService;
//# sourceMappingURL=recipe.service.js.map