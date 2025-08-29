import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {faPencil, faTimes} from '@fortawesome/free-solid-svg-icons';
import {GoalService} from '../../services/goal-service';
import {Goal} from '../../classes/goal';
import {ToastrService} from 'ngx-toastr';
import {Subscription} from 'rxjs';
import {ResponseGoal} from '../../classes/response-goal';

@Component({
  selector: 'app-goal-list',
  standalone: false,
  templateUrl: './goal-list.html',
  styleUrl: './goal-list.scss'
})
export class GoalList implements OnInit, OnDestroy {

  public faPencil: IconDefinition = faPencil;
  public faTimes: IconDefinition = faTimes;

  public loadingGoals: boolean = false;

  public goals: Goal[] | undefined = [];

  @Output() onGoalEdit: EventEmitter<string> = new EventEmitter<string>();

  public deleteGoalSubscription?: Subscription;

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

  public editGoal(id: string | undefined): void {
    this.onGoalEdit.emit(id);
  }

  public deleteGoal(id: string | undefined): void {
    this.deleteGoalSubscription = this.goalService.deleteGoal(id).subscribe(() => {
      this.toastr.success("Goal deleted successfully");
      this.getGoals();
    }, (error) => {
      this.toastr.error(error);
    });
  }

  ngOnDestroy(): void {
    this.deleteGoalSubscription?.unsubscribe();
  }
}
