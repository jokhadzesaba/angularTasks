import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Module } from './task1/task1.module';
import { Task2Module } from './task2/task2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Task1Module,
    Task2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
