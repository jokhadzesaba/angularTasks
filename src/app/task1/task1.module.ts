import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task1RoutingModule } from './task1-routing.module';
import { Task1Component } from './task1/task1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CostumFormControlComponent } from './costum-form-control/costum-form-control.component';


@NgModule({
  declarations: [
    Task1Component,
    CostumFormControlComponent
    
  ],
  imports: [
    CommonModule,
    Task1RoutingModule,
    ReactiveFormsModule,
    FormsModule,


  ],
  exports:[Task1Component]
})
export class Task1Module { }
