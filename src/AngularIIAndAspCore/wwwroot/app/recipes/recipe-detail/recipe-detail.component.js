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
const router_1 = require("@angular/router");
const recipe_service_1 = require("../recipe.service");
const shopping_list_service_1 = require("../../shopping-list/shopping-list.service");
let RecipeDetailComponent = class RecipeDetailComponent {
    constructor(sls, route, recipeService) {
        this.sls = sls;
        this.route = route;
        this.recipeService = recipeService;
    }
    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.recipeIndex = params['id'];
            this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onAddToShoppingList() {
        this.sls.addItems(this.selectedRecipe.ingredients);
    }
};
RecipeDetailComponent = __decorate([
    core_1.Component({
        selector: 'rb-recipe-detail',
        templateUrl: './htm-views/recipes/recipe-detail/recipe-detail.component.html',
    }),
    __metadata("design:paramtypes", [shopping_list_service_1.ShoppingListService,
        router_1.ActivatedRoute,
        recipe_service_1.RecipeService])
], RecipeDetailComponent);
exports.RecipeDetailComponent = RecipeDetailComponent;
//# sourceMappingURL=recipe-detail.component.js.map