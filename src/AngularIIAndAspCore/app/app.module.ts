import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, OtherComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

