import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task3RoutingModule } from './task3-routing.module';
import { Task3Component } from './task3/task3.component';
import { FormsModule } from '@angular/forms';
import { ReformatDatePipe } from './reformat-date.pipe';


@NgModule({
  declarations: [
    Task3Component,
    ReformatDatePipe
  ],
  imports: [
    CommonModule,
    Task3RoutingModule,
    FormsModule
  ],
  exports:[Task3Component]

})
export class Task3Module { }
