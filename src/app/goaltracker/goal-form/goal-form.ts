import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {faSave, faBroom} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Priority} from '../../enums/priority';
import {Status} from '../../enums/status';
import {Goal} from '../../classes/goal';
import {GoalService} from '../../services/goal-service';
import {ResponseGoal} from '../../classes/response-goal';
import {ToastrService} from 'ngx-toastr';

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
  public faBroom: IconDefinition = faBroom;

  public loadingGoal: boolean = false;
  public savingGoal: boolean = false;
  public editGoal: boolean = false;

  @Output() onGoalSave: EventEmitter<ResponseGoal> = new EventEmitter<ResponseGoal>();

  constructor(
    private fb: FormBuilder,
    private goalService: GoalService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit(): void {
    this.goalForm = this.fb.group({
      goalName: new FormControl('', [Validators.required]),
      goalPriority: new FormControl('', [Validators.required]),
      goalStatus: new FormControl('', [Validators.required])
    });
  }

  public getGoalToEdit(id: string | undefined) {
    this.loadingGoal = true;
    this.goalService.getGoalById(id)
    .then((responseGoal) => {
      const goal = responseGoal.data;
      this.goalForm.reset();
      this.goalForm.controls['goalName'].setValue(goal?.name);
      this.goalForm.controls['goalPriority'].setValue(goal?.priority);
      this.goalForm.controls['goalStatus'].setValue(goal?.status);
      this.editGoal = true;
    })
    .catch((error) => {
      this.toastr.error(error);
    })
    .finally(() => {
      this.loadingGoal = false;
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
      this.toastr.success('Goal saved successfully');
      this.cleanForm();
    }).catch((error) => {
      this.toastr.error(error);
    }).finally(() => {
      this.savingGoal = false;
    });
  }

  public cleanForm(): void {
    this.goalForm.controls['goalName'].setValue('');
    this.goalForm.controls['goalPriority'].setValue('');
    this.goalForm.controls['goalStatus'].setValue('');
    this.goalForm.reset();
    this.editGoal = false;
  }


}
