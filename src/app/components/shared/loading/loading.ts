import {Component, OnInit} from '@angular/core';
import {IconDefinition} from '@fortawesome/angular-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading',
  standalone: false,
  templateUrl: './loading.html',
  styleUrl: './loading.scss'
})
export class Loading implements OnInit{

  faSpinner: IconDefinition = faSpinner;

  ngOnInit(): void {
  }

}
