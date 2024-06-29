import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Module } from './task1/task1.module';
import { Task2Module } from './task2/task2.module';
import { Task3Module } from './task3/task3.module';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { Task4Module } from './task4/task4.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderComponent,
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    Task1Module,
    Task2Module,
    Task3Module,
    Task4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
