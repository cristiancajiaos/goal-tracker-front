import {Component, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {faPencil, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-goal-list',
  standalone: false,
  templateUrl: './goal-list.html',
  styleUrl: './goal-list.scss'
})
export class GoalList implements OnInit {

  public faPencil: IconDefinition = faPencil;
  public faTimes: IconDefinition = faTimes;

  ngOnInit(): void {
  }

}
