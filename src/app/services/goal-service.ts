import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseGoal} from '../classes/response-goal';
import {lastValueFrom, Observable} from 'rxjs';
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

  public async saveGoal(goal: Goal): Promise<ResponseGoal> {
    return await lastValueFrom((this.http.post<ResponseGoal>(this.baseUrl, goal, {
      headers: {
        "Content-Type":"application/json "
      }
    })))
  }

  public deleteGoal(id: string | undefined): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  public async getGoalById(id: string | undefined): Promise<ResponseGoal> {
    return await lastValueFrom(this.http.get<ResponseGoal>(`${this.baseUrl}/${id}`));
  }

  public async updateGoal(id: string | undefined, goal: Goal) {
    return await lastValueFrom(this.http.patch<ResponseGoal>(`${this.baseUrl}/${id}`, goal, {
      headers: {
        "Content-Type":"application/json"
      }
    }))
  }

}
