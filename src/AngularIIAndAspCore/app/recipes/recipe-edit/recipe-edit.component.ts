import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import {
    FormArray,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from "@angular/forms";

import { RecipeService } from "../recipe.service";
import { Recipe } from "../recipe";

@Component({

    selector: 'rb-recipe-edit',
    templateUrl: './htm-views/recipes/recipe-edit/recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
    recipeForm: FormGroup;
    private recipeIndex: number;
    private recipe: Recipe;
    private isNew = true;
    private subscription: Subscription;

    constructor(private route: ActivatedRoute,
        private recipeService: RecipeService,
        private formBuilder: FormBuilder,
        private router: Router) { }

    ngOnInit() {   
        this.subscription = this.route.params.subscribe(
            (params: any) => {
                if (params.hasOwnProperty('id')) {
                    this.isNew = false;
                    this.recipeIndex = +params['id']; // use "+" to convert to number
                    this.recipe = this.recipeService.getRecipe(this.recipeIndex)
                } else {
                    this.isNew = true;
                    this.recipe = null;
                }
                this.initForm();
            }
        );
    }

    // Data driven approach, data will look like items contained in this.recipeForm 
    onSubmit() {
        const newRecipe = this.recipeForm.value;
        if (this.isNew) {
            this.recipeService.addRecipe(newRecipe);
        } else {
            //              pass old recipe, new recipe
            this.recipeService.editRecipe(this.recipe, newRecipe);
        }
        this.navigateBack();
    }

    onAddItem(name: string, amount: string) {
        (<FormArray>this.recipeForm.controls['ingredients']).push(
            new FormGroup({
                name: new FormControl(name, Validators.required),
                amount: new FormControl(amount, [
                    Validators.required,
                    Validators.pattern("\\d+")
                ])
            })
        );
    }

    onRemoveItem(index: number) {
        (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
    }

    onCancel() {
        this.navigateBack();
    }

    // prevent memory leaks from subscription
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private navigateBack() {
        // go up one...
        this.router.navigate(['../']);
    }

    private initForm( ) {
        let recipeName = '';
        let recipeImageUrl = '';
        let recipeContent = '';
        let recipeIngredients: FormArray = new FormArray([]);

        // Edit Mode...
        if (!this.isNew) {
            for (let i = 0; i < this.recipe.ingredients.length; i++){
                recipeIngredients.push(
                    new FormGroup({
                        name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
                        amount: new FormControl(this.recipe.ingredients[i].amount, [
                            Validators.required,
                            Validators.pattern("\\d+")
                        ])
                    })
                );
            }  
            recipeName = this.recipe.name;
            recipeImageUrl = this.recipe.imagePath;
            recipeContent = this.recipe.description;            
        }
        this.recipeForm = this.formBuilder.group({
            name: [recipeName, Validators.required],            // correspond to formControlName name on html form
            imagePath: [recipeImageUrl, Validators.required],   // correspond to formControlName imagePath on html form
            description: [recipeContent, Validators.required],  // correspond to formControlName description on html form
            ingredients: recipeIngredients                      // correspond to formArray ingredients on html form
        });
    }
}