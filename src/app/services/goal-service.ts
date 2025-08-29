import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseGoal} from '../classes/response-goal';
import {lastValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  private baseUrl: string = 'http://localhost:3000/api/v1/goals';

  constructor(
    private http: HttpClient
  ) {}

  public async getAllGoals(): Promise<ResponseGoal> {
    return await lastValueFrom(this.http.get<ResponseGoal>(this.baseUrl));
  }

}
