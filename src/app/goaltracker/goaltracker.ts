import {Component, OnInit, ViewChild} from '@angular/core';
import {GoalList} from './goal-list/goal-list';
import {ResponseGoal} from '../classes/response-goal';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-goaltracker',
  standalone: false,
  templateUrl: './goaltracker.html',
  styleUrl: './goaltracker.scss'
})
export class Goaltracker implements OnInit {

  @ViewChild(GoalList) goalList!: GoalList;

  constructor(
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
  }

  public sendAlertForGoalSave(goal: ResponseGoal): void {
    this.goalList.getGoals();
  }

}
