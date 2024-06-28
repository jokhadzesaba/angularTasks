import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task2RoutingModule } from './task2-routing.module';
import { Task2Component } from './task2/task2.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directive/highlight.directive';
import { StringFormatPipe } from './pipe/string-format.pipe';




@NgModule({
  declarations: [
    Task2Component,
    HighlightDirective,
    StringFormatPipe,
  ],
  imports: [
    CommonModule,
    Task2RoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  exports:[Task2Component]

})
export class Task2Module { }
