import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'goaltracker', loadChildren: () => import('./goaltracker/goaltracker-module').then(m => m.GoaltrackerModule) },
  { path: '**', redirectTo: '/goaltracker', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
