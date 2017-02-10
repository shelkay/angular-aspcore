import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { RecipeBookAppComponent } from './recipes/recipe-book.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { HeaderComponent } from './recipes/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeStartComponent } from './recipes/recipe-start.component';
import { routing } from './app.routing';
import {  APP_BASE_HREF } from '@angular/common';


 
@NgModule({  
    imports: [BrowserModule, FormsModule, HttpModule, routing],
    declarations: [RecipeBookAppComponent, RecipeItemComponent, RecipeListComponent,
        HeaderComponent, RecipesComponent, RecipeDetailComponent, ShoppingListComponent,
        ShoppingListAddComponent, DropdownDirective, RecipeStartComponent, RecipeEditComponent],
    providers: [RecipeService, ShoppingListService, { provide: APP_BASE_HREF, useValue: '/' }],  
    bootstrap: [RecipeBookAppComponent]      
})
export class AppModule { } 