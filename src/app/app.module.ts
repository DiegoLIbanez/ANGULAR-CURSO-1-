import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { heroesModule } from './heroe/heroes.module';
import { ContardorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    heroesModule,
    ContardorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
