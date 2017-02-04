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
const recipe_1 = require("../recipe");
let RecipeListComponent = class RecipeListComponent {
    constructor() {
        // we are setting the recipe here and then making making it available to the recipe variable in recipe-item-component 
        this.recipes = [
            new recipe_1.Recipe('Schnitzel', 'Very tasty', 'https://s-media-cache-ak0.pinimg.com/736x/9a/c3/4b/9ac34b2ce88abcb806a1cf5722a5490e.jpg', []),
            new recipe_1.Recipe('Summer Salad', 'Okayish', 'http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/peruvian-toasted-sweetcorn-avocado-quinoa-salad.jpg?itok=xZCJz9qU', [])
        ];
        this.recipeSelected = new core_1.EventEmitter();
    }
    ngOnInit() {
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
    __metadata("design:paramtypes", [])
], RecipeListComponent);
exports.RecipeListComponent = RecipeListComponent;
//# sourceMappingURL=recipe-list.component.js.map