import {Goal} from './goal';

export class ResponseGoals {
  public success?: boolean;
  public count?: number;
  public data?: Goal[] | undefined;

  constructor() {}
}
