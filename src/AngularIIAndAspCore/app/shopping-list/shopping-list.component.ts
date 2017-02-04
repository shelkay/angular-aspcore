﻿import { Component, OnInit } from '@angular/core';
import { Ingredient } from  '../shared/ingredient';

@Component({
    selector: 'rb-shopping-list',
    templateUrl: './htm-views/shopping-list/shopping-list.component.html',
    styles: []
})
export class ShoppingListComponent implements OnInit {
    items: Ingredient[];
    constructor() { }

    ngOnInit() { }
}