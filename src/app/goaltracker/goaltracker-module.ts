import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoaltrackerRoutingModule } from './goaltracker-routing-module';
import { Goaltracker } from './goaltracker';
import { GoalForm } from './goal-form/goal-form';
import { GoalList } from './goal-list/goal-list';


@NgModule({
  declarations: [
    Goaltracker,
    GoalForm,
    GoalList
  ],
  imports: [
    CommonModule,
    GoaltrackerRoutingModule
  ]
})
export class GoaltrackerModule { }
