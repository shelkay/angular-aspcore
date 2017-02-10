"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const recipe_book_component_1 = require("./recipes/recipe-book.component");
const recipe_item_component_1 = require("./recipes/recipe-list/recipe-item.component");
const recipe_list_component_1 = require("./recipes/recipe-list/recipe-list.component");
const recipe_edit_component_1 = require("./recipes/recipe-edit/recipe-edit.component");
const header_component_1 = require("./recipes/header.component");
const recipes_component_1 = require("./recipes/recipes.component");
const recipe_detail_component_1 = require("./recipes/recipe-detail/recipe-detail.component");
const shopping_list_component_1 = require("./shopping-list/shopping-list.component");
const shopping_list_add_component_1 = require("./shopping-list/shopping-list-add.component");
const dropdown_1 = require("./dropdown");
const recipe_service_1 = require("./recipes/recipe.service");
const shopping_list_service_1 = require("./shopping-list/shopping-list.service");
const recipe_start_component_1 = require("./recipes/recipe-start.component");
const app_routing_1 = require("./app.routing");
const common_1 = require("@angular/common");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.routing],
        declarations: [recipe_book_component_1.RecipeBookAppComponent, recipe_item_component_1.RecipeItemComponent, recipe_list_component_1.RecipeListComponent,
            header_component_1.HeaderComponent, recipes_component_1.RecipesComponent, recipe_detail_component_1.RecipeDetailComponent, shopping_list_component_1.ShoppingListComponent,
            shopping_list_add_component_1.ShoppingListAddComponent, dropdown_1.DropdownDirective, recipe_start_component_1.RecipeStartComponent, recipe_edit_component_1.RecipeEditComponent],
        providers: [recipe_service_1.RecipeService, shopping_list_service_1.ShoppingListService, { provide: common_1.APP_BASE_HREF, useValue: '/' }],
        bootstrap: [recipe_book_component_1.RecipeBookAppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map