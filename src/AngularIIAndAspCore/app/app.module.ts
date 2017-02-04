import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { RecipeBookAppComponent } from './recipes/recipe-book.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { HeaderComponent } from './recipes/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown';

 
@NgModule({
  
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [RecipeBookAppComponent, RecipeItemComponent, RecipeListComponent,
        HeaderComponent, RecipesComponent, RecipeDetailComponent, ShoppingListComponent,
        ShoppingListAddComponent, DropdownDirective],
    //providers:[],  add providers here
    bootstrap: [RecipeBookAppComponent]
      
})
export class AppModule { }

