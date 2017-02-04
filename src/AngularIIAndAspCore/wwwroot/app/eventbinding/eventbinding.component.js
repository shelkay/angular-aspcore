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
let EventBindingComponent = class EventBindingComponent {
    constructor() {
        this.bindable = 1000;
        this.person = {
            name: 'Max',
            age: 27
        };
        // Make event available outside of component...
        this.clicked = new core_1.EventEmitter();
    }
    onClicked() {
        //alert('Surprised it Worked');
        this.clicked.emit('It Works!');
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EventBindingComponent.prototype, "bindable", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EventBindingComponent.prototype, "clicked", void 0);
EventBindingComponent = __decorate([
    core_1.Component({
        selector: 'app-event-binding',
        template: `
        <button (click)="onClicked()">Click Me!</button>
        <input type="text" [(ngModel)]="person.name">
        <input type="text" [(ngModel)]="person.name"><br />
        <hr>
        <p #boundParagraph>{{bindable}}</p>
        <p>{{boundParagraph.textContext}}</p> 
    `,
        styles: []
    })
], EventBindingComponent);
exports.EventBindingComponent = EventBindingComponent;
//# sourceMappingURL=eventbinding.component.js.map