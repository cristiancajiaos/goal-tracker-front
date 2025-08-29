import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Goaltracker } from './goaltracker';

const routes: Routes = [{ path: '', component: Goaltracker }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoaltrackerRoutingModule { }
