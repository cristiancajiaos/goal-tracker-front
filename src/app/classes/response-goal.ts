import {Goal} from './goal';

export class ResponseGoal {
  public success?: boolean;
  public count?: number;
  public data?: Goal[] | undefined;

  constructor() {}
}
