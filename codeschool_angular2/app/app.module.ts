import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarPartsComponent } from './car-parts.component';

@NgModule({
	declarations: [ 
		AppComponent,
		CarPartsComponent
	],
	imports: [ BrowserModule ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }