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
const recipe_service_1 = require("../recipe.service");
let RecipeListComponent = class RecipeListComponent {
    constructor(recipeService) {
        this.recipeService = recipeService;
        // we are setting the recipe here and then making making it available to the recipe variable in recipe-item-component 
        this.recipes = [];
        this.recipeSelected = new core_1.EventEmitter();
    }
    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
    }
    onSelected(recipe) {
        this.recipeSelected.emit(recipe);
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RecipeListComponent.prototype, "recipeSelected", void 0);
RecipeListComponent = __decorate([
    core_1.Component({
        selector: 'rb-recipe-list',
        templateUrl: './htm-views/recipes/recipe-list.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [recipe_service_1.RecipeService])
], RecipeListComponent);
exports.RecipeListComponent = RecipeListComponent;
//# sourceMappingURL=recipe-list.component.js.map