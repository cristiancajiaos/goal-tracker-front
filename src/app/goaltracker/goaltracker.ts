import {Component, OnInit, ViewChild} from '@angular/core';
import {GoalList} from './goal-list/goal-list';
import {ResponseGoal} from '../classes/response-goal';
import {ToastrService} from 'ngx-toastr';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-goaltracker',
  standalone: false,
  templateUrl: './goaltracker.html',
  styleUrl: './goaltracker.scss'
})
export class Goaltracker implements OnInit {

  @ViewChild(GoalList) goalList!: GoalList;

  constructor(
    public toastr: ToastrService,
    public title: Title
  ) {}

  ngOnInit(): void {
    this.setTitle();
  }

  public setTitle(): void {
    this.title.setTitle('Goal Tracker');
  }

  public sendAlertForGoalSave(goal: ResponseGoal): void {
    this.goalList.getGoals();
  }

}
