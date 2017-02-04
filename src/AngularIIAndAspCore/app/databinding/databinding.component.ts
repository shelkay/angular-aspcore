import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-databinding',
    templateUrl: './htm-views/databinding/databinding.html',
    styleUrls: ['./htm-views/databinding/databinding.css']
})
export class DatabindingComponent {   
    @Input() myResult: number = 0; 
    constructor() { }

    ngOnInit() { }

 
}


