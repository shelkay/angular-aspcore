import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-other',
    templateUrl: './htm-views/other/other.html',
    styleUrls: ['./htm-views/other/other.css']
   
})
export class OtherComponent   { 
    stringInterpolation = 'Example of string interpolation';
    numberInterpolation = 2; 
    constructor() { }

    ngOnInit() {}

    testMe() {
        return true;
    }

    onClicked(value: string) {
        alert(value);
    }

}


