import {Component, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {faSave} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Priority} from '../../enums/priority';
import {Status} from '../../enums/status';

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

  constructor(
    private fb: FormBuilder
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
    console.log(this.goalForm.value);
  }


}
