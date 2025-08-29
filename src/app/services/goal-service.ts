import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseGoal} from '../classes/response-goal';
import {lastValueFrom} from 'rxjs';
import {Goal} from '../classes/goal';
import {ResponseGoals} from '../classes/response-goals';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  private baseUrl: string = 'http://localhost:3000/api/v1/goals';

  constructor(
    private http: HttpClient
  ) {}

  public async getAllGoals(): Promise<ResponseGoals> {
    return await lastValueFrom(this.http.get<ResponseGoals>(this.baseUrl));
  }

  // public async saveGoal(goal: Goal):

}
