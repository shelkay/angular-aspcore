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
    addItem(item) {
        this.items.push(item);
    }
    editItem(oldItem, newItem) {
        this.items[this.items.indexOf(oldItem)] = newItem;
    }
    deleteItem(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}
exports.ShoppingListService = ShoppingListService;
//# sourceMappingURL=shopping-list.service.js.map