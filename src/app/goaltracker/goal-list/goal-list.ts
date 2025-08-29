import {Component, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {faPencil, faTimes} from '@fortawesome/free-solid-svg-icons';
import {GoalService} from '../../services/goal-service';
import {Goal} from '../../classes/goal';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-goal-list',
  standalone: false,
  templateUrl: './goal-list.html',
  styleUrl: './goal-list.scss'
})
export class GoalList implements OnInit {

  public faPencil: IconDefinition = faPencil;
  public faTimes: IconDefinition = faTimes;

  public loadingGoals: boolean = false;

  public goals: Goal[] | undefined = [];

  constructor(
    private goalService: GoalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getGoals();
  }

  public getGoals(): void {
    this.loadingGoals = true;
    this.goalService.getAllGoals().then((responseGoals) => {
      this.goals = responseGoals.data;
    }).catch((error) => {
      this.toastr.error(error);
    }).finally(() => {
      this.loadingGoals = false;
    });
  }

}
