import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task5Component } from './task5/task5.component';

const routes: Routes = [
  {
    path: 'task1',
    loadChildren: () =>
      import('./task1/task1.module').then((m) => m.Task1Module),
  },
  {
    path: 'task2',
    loadChildren: () =>
      import('./task2/task2.module').then((m) => m.Task2Module),
  },
  {
    path: 'task3',
    loadChildren: () =>
      import('./task3/task3.module').then((m) => m.Task3Module),
  },
  {
    path: 'task4',
    loadChildren: () =>
      import('./task4/task4.module').then((m) => m.Task4Module),
  },
  {path:'task5',component:Task5Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
