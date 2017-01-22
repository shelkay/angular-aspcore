import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './htm-views/app.component.html'
    //template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent {
    name = 'Billy Shelton';
}