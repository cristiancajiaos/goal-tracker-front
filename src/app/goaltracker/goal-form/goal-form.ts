import {Component, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {faSave} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-goal-form',
  standalone: false,
  templateUrl: './goal-form.html',
  styleUrl: './goal-form.scss'
})
export class GoalForm implements OnInit {


  public faSave: IconDefinition = faSave;

  ngOnInit(): void {
  }

}
