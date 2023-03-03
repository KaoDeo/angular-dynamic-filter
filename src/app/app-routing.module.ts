import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/filter', pathMatch: 'full' },
  {
    path: 'filter',
    loadChildren: () =>
      import('./components/dynamic-filter/filter.module').then(
        (m) => m.FilterModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
