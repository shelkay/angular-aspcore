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
const forms_1 = require("@angular/forms");
const recipe_service_1 = require("../recipe.service");
let RecipeEditComponent = class RecipeEditComponent {
    constructor(route, recipeService, formBuilder) {
        this.route = route;
        this.recipeService = recipeService;
        this.formBuilder = formBuilder;
        this.isNew = true;
    }
    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            if (params.hasOwnProperty('id')) {
                this.isNew = false;
                this.recipeIndex = +params['id']; // use "+" to convert to number
                this.recipe = this.recipeService.getRecipe(this.recipeIndex);
            }
            else {
                this.isNew = true;
                this.recipe = null;
            }
            this.initForm();
        });
    }
    // prevent memory leaks from subscription
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    initForm() {
        let recipeName = '';
        let recipeImageUrl = '';
        let recipeContent = '';
        let recipeIngredients = new forms_1.FormArray([]);
        // Edit Mode...
        if (!this.isNew) {
            for (let i = 0; i < this.recipe.ingredients.length; i++) {
                recipeIngredients.push(new forms_1.FormGroup({
                    name: new forms_1.FormControl(this.recipe.ingredients[i].name, forms_1.Validators.required),
                    amount: new forms_1.FormControl(this.recipe.ingredients[i].amount, [
                        forms_1.Validators.required,
                        forms_1.Validators.pattern("\\d+")
                    ])
                }));
            }
            recipeName = this.recipe.name;
            recipeImageUrl = this.recipe.imagePath;
            recipeContent = this.recipe.description;
        }
        this.recipeForm = this.formBuilder.group({
            name: [recipeName, forms_1.Validators.required],
            imagePath: [recipeImageUrl, forms_1.Validators.required],
            description: [recipeContent, forms_1.Validators.required],
            ingredients: recipeIngredients // correspond to formArray ingredients on html form
        });
    }
};
RecipeEditComponent = __decorate([
    core_1.Component({
        selector: 'rb-recipe-edit',
        templateUrl: './htm-views/recipes/recipe-edit/recipe-edit.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        recipe_service_1.RecipeService,
        forms_1.FormBuilder])
], RecipeEditComponent);
exports.RecipeEditComponent = RecipeEditComponent;
//# sourceMappingURL=recipe-edit.component.js.map