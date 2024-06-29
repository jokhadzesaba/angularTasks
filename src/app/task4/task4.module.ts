import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task4RoutingModule } from './task4-routing.module';
import { Task4Component } from './task4/task4.component';
import { DiscolorationDirective } from './directive/discoloration.directive';

@NgModule({
  declarations: [Task4Component, DiscolorationDirective],
  imports: [CommonModule, Task4RoutingModule],
  exports: [Task4Component],
})
export class Task4Module {}
