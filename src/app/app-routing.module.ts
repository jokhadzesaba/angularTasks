import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'task1',
    loadChildren: () =>
      import('./task1/task1.module').then((m) => m.Task1Module),
  },
  {path:'task2',loadChildren:()=>import('./task2/task2.module').then((m)=>m.Task2Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
