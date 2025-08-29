import {Component, EventEmitter, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {faSave} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Priority} from '../../enums/priority';
import {Status} from '../../enums/status';
import {Goal} from '../../classes/goal';
import {GoalService} from '../../services/goal-service';
import {ResponseGoal} from '../../classes/response-goal';

@Component({
  selector: 'app-goal-form',
  standalone: false,
  templateUrl: './goal-form.html',
  styleUrl: './goal-form.scss'
})
export class GoalForm implements OnInit {

  public priorities: Priority[] = [
    Priority.LOW, Priority.MEDIUM, Priority.HIGH
  ];

  public statuses: Status[] = [
    Status.PENDING, Status.IN_PROGRESS, Status.COMPLETED
  ];

  public goalForm: FormGroup = new FormGroup({});

  public faSave: IconDefinition = faSave;

  public savingGoal: boolean = false;

  public onGoalSave: EventEmitter<ResponseGoal> = new EventEmitter<ResponseGoal>();

  constructor(
    private fb: FormBuilder,
    private goalService: GoalService
  ) {

  }

  ngOnInit(): void {
    this.goalForm = this.fb.group({
      goalName: new FormControl('', [Validators.required]),
      goalPriority: new FormControl('', [Validators.required]),
      goalStatus: new FormControl('', [Validators.required])
    });
  }

  public sendGoal(): void {
    this.savingGoal = true;

    const savingGoal = new Goal();

    savingGoal.name = this.goalForm.value['goalName'];
    savingGoal.priority = this.goalForm.value['goalPriority'];
    savingGoal.status = this.goalForm.value['goalStatus'];

    this.goalService.saveGoal(savingGoal).then((responseGoal) => {
      this.onGoalSave.emit(responseGoal);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      this.savingGoal = false;
    });
  }


}
