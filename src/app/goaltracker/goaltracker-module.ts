import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoaltrackerRoutingModule } from './goaltracker-routing-module';
import { Goaltracker } from './goaltracker';
import { GoalForm } from './goal-form/goal-form';
import { GoalList } from './goal-list/goal-list';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    Goaltracker,
    GoalForm,
    GoalList
  ],
  imports: [
    CommonModule,
    GoaltrackerRoutingModule,
    NgbModule,
    FontAwesomeModule
  ]
})
export class GoaltrackerModule { }
