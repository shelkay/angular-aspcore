import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
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
export class EventBindingComponent {
    @Input() bindable = 1000;
    person = {
        name: 'Max',
        age: 27
    };

    // Make event available outside of component...
    @Output() clicked = new EventEmitter<string>();

    onClicked() {
        //alert('Surprised it Worked');
        this.clicked.emit('It Works!');
    }
}