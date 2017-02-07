"use strict";
class ShoppingListService {
    constructor() {
        this.items = [];
    }
    getItems() {
        return this.items;
    }
    addItems(items) {
        Array.prototype.push.apply(this.items, items);
    }
}
exports.ShoppingListService = ShoppingListService;
//# sourceMappingURL=shopping-list.service.js.map