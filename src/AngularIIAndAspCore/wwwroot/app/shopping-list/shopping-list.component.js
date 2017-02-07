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
const shopping_list_service_1 = require("./shopping-list.service");
let ShoppingListComponent = class ShoppingListComponent {
    constructor(sls) {
        this.sls = sls;
    }
    ngOnInit() {
        this.items = this.sls.getItems();
    }
};
ShoppingListComponent = __decorate([
    core_1.Component({
        selector: 'rb-shopping-list',
        templateUrl: './htm-views/shopping-list/shopping-list.component.html',
        styles: []
    }),
    __metadata("design:paramtypes", [shopping_list_service_1.ShoppingListService])
], ShoppingListComponent);
exports.ShoppingListComponent = ShoppingListComponent;
//# sourceMappingURL=shopping-list.component.js.map